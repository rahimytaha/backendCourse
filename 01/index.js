const express = require("express");
require("module-alias/register");
require("dotenv").config();
const swaggerJsdocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swagger_option = {
  definition: {
    openapi: "3.0.0",
    info: { title: "backend course" },
    components: {
      securitySchema: {
        bearerAuth: {
          type: "http",
          schema: "bearer",
          bearerFormat: "JWT",
        },
      },
      security: [{ bearerAuth: [] }],
    },
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
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth/index");
const userRouter = require("./routes/users/index.route");

app.use("/public", express.static("public"));

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.send("test");
});
app.use(errorHandler);
app.listen(port, () => {
  console.log("server staarted");
});
