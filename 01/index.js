const express = require("express");
require("module-alias/register");
require("dotenv").config();
require("./config/component.swagger")


/**
 * @swagger
 * components:
 *   responses:
 *     UnauthorizedError:
 *       description: احراز هویت نشده - توکن معتبر ارائه نشده است
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               success:
 *                 type: boolean
 *                 example: false
 *               message:
 *                 type: string
 *                 example: "لطفاً وارد حساب کاربری خود شوید"
 */



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
const port = process.env.PORT || 3001;

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
