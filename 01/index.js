const express = require("express");
require("module-alias/register");
require("dotenv").config();
require("./config/component.swagger");

const winston = require('winston');
const swaggerJsdocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const morgan = require("morgan");
const logger = require("./utils/logger");

const swagger_option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "backend course",
      description: "API documentation for backend course",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./**/*.route.js"],
};

const app = express();

app.use(
  "/doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdocs(swagger_option)),
);

const errorHandler = require("./utils/errorHandler.util");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth/index.route");
const userRouter = require("./routes/users/index.route");
const courseRouter = require("./routes/courses/index.route");
const newsRouter = require("./routes/news/index.route");
const { courseCategoryRouter } = require("./routes/courses/category.route");
const { courseCommmentRouter } = require("./routes/courses/comment.route");
const { courseFavoriteRoute } = require("./routes/courses/favorite.route");
const { courseRateRoute } = require("./routes/courses/rate.route");
const { courseSessionRoute } = require("./routes/courses/session.route");
const { courseTypeRoute } = require("./routes/courses/type.route");
const newsReactionRouter = require('./routes/news/news-reaction.route');
const commentReactionRouter = require('./routes/news/comment-reaction.route');
const newsFavoriteRouter = require('./routes/news/favorite.route');
const newsCommentRouter = require('./routes/news/comment.route');
const ticketRouter = require("./routes/tickets/index.route");

app.use("/public", express.static("public"));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/course", courseRouter);
app.use("/courseCategory", courseCategoryRouter);
app.use("/courseComment", courseCommmentRouter);
app.use("/courseFavorite", courseFavoriteRoute);
app.use("/courseRate", courseRateRoute);
app.use("/courseSession", courseSessionRoute);
app.use("/courseType", courseTypeRoute);
app.use("/news", newsRouter);
app.use("/news/reaction", newsReactionRouter)
app.use("/news/favorite", newsFavoriteRouter)
app.use("/news/comments", newsCommentRouter)
app.use("/news/comments/reaction", commentReactionRouter)
app.use("/tickets", ticketRouter)

app.get("/", (req, res, next) => {
  res.send("server is successfully running...");
});

// app.use(morgan("combined", { stream: winston.stream.write }));
app.use(errorHandler);

app.listen(port, () => {
  logger.info("Server started on port " + port);
});
