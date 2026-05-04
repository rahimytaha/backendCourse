const prisma = require("../../utils/client.util");
const { sanitizeUser } = require("../auth/index.service");
const { createNotification } = require("../notification/notification.service");

const createTicket = async (userId, data) => {
  const ticket = await prisma.ticket.create({
    data: {
      title: data.title,
      priority: data.priority || "medium",
      user_id: userId,
    },
  });

  // create first message
  await prisma.ticket_message.create({
    data: {
      ticket_id: ticket.id,
      user_id: userId,
      message: data.message,
    },
  });

  await createNotification({
    userId,
    title: "Ticket Created",
    message: "Your ticket has been created successfully",
  });

  return ticket;
};

const getAllTickets = async (filters = {}) => {
  const { status, priority, userId } = filters;

  return prisma.ticket.findMany({
    where: {
      ...(status && { status }),
      ...(priority && { priority }),
      ...(userId && { user_id: userId }),
    },
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });
};

const getTicketById = async (ticketId, currentUser) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: { user: { select: { id: true, name: true, email: true } } },
  });

  if (!ticket) throw new Error("Ticket not found");

  // only owner or admin can access
  if (
    ticket.user_id !== currentUser.id &&
    !currentUser.roles.includes("admin")
  ) {
    throw new Error("Access denied");
  }

  return ticket;
};

const updateTicketStatus = async (ticketId, status) => {
  const exitingTicket = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!exitingTicket) throw new Error("Ticket not found");

  const ticket = await prisma.ticket.update({
    where: { id: ticketId },
    data: { status },
  });

  await createNotification({
    userId: ticket.user_id,
    title: "Ticket Updated",
    message: `Your ticket status changed to ${status}`,
  });

  return ticket;
};

const assignTicket = async (ticketId, adminId) => {
  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

  if (!ticket) throw new Error("Ticket not found");

  return prisma.ticket.update({
    where: { id: ticketId },
    data: {
      assigned_to: adminId,
      status: "in_progress",
    },
  });
};

const deleteTicket = async (ticketId) => {
  const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

  if (!ticket) throw new Error("Ticket not found");

  await prisma.ticket.delete({
    where: { id: ticketId },
  });

  return { success: true };
};

// send message inside ticket
const sendTicketMessage = async (ticketId, currentUser, message) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!ticket) throw new Error("Ticket not found");

  if (ticket.status === "closed" || ticket.status === "resolved") {
    throw new Error("Ticket is closed or resolved");
  }

  const isOwner = ticket.user_id === currentUser.id;
  const isAssigned = ticket.assigned_to === currentUser.id;
  const isAdmin = currentUser.roles?.includes("admin");

  if (!isOwner && !isAssigned && !isAdmin) {
    throw new Error("Access denied");
  }

  return prisma.ticket_message.create({
    data: {
      ticket_id: ticketId,
      user_id: currentUser.id,
      message,
    },
  });
};

// get messages
const getTicketMessages = async (ticketId, currentUser) => {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!ticket) throw new Error("Ticket not found");

  const isOwner = ticket.user_id === currentUser.id;
  const isAssigned = ticket.assigned_to === currentUser.id;
  const isAdmin = currentUser.roles?.includes("admin");

  if (!isOwner && !isAssigned && !isAdmin) {
    throw new Error("Access denied");
  }

  return prisma.ticket_message.findMany({
    where: { ticket_id: ticketId },
    orderBy: { created_at: "asc" },
    include: {
      user: { select: { id: true, name: true, email: true } },
    },
  });
};

module.exports = {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketStatus,
  assignTicket,
  deleteTicket,
  getTicketMessages,
  sendTicketMessage,
};
