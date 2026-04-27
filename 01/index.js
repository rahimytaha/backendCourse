const express = require('express');
require('module-alias/register');
require('dotenv').config();
require('./config/component.swagger');

const swaggerJsdocs = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const logger = require('./utils/logger');

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
  swaggerUi.setup(swaggerJsdocs(swagger_option))
);

const errorHandler = require("./utils/errorHandler.util");
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth/index.route");
const userRouter = require("./routes/users/index.route");
const courseRouter = require("./routes/courses/index.route");
const newsRouter = require("./routes/news/index.route");
const commentNewsRouter = require("./routes/news/comment.route");
const winston = require('winston');
const newsReactionRouter = require('./routes/news/news-reaction.route');
const commentReactionRouter = require('./routes/news/comment-reaction.route');
const newsFavoriteRouter = require('./routes/news/favorite.route');

app.use("/public", express.static("public"));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/course", courseRouter);
app.use("/news", newsRouter);
app.use("/news/reaction", newsReactionRouter)
app.use("/news/favorite", newsFavoriteRouter)
app.use("/news/comments", commentNewsRouter)
app.use("/news/comments/reaction", commentReactionRouter)

app.get("/", (req, res, next) => {
  res.send("test");
});

app.use(morgan('combined', { stream: winston.stream.write }));
app.use(errorHandler);

app.listen(port, () => {
  logger.info("Server started on port " + port);
});