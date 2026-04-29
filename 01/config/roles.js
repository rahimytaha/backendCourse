const ROLE_PERMISSIONS = {
  owner: ["*"],
  admin: ["*"],
  teacher: [
    "course:read:any",
    "course:read:own",
    "course:create",
    "course:update:own",

    
    "courseCategory:create",
    "courseCategoryRelation:create",
    "courseCategoryRelation:delete"
  ],
  student: [
    "course:read:any",
    "course:read:own",
    "user:read:own",
    "user:update:own",
  ],
  author: [
    "news:update",
    "news:delete",
    "news:create",
    
  ],
};

module.exports = {
  ROLE_PERMISSIONS,
};
