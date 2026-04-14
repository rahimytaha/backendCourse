const express = require("express");
require("module-alias/register");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authRouter = require("./routes/auth/index");
const userRouter = require("./routes/users");

app.use("/public", express.static("public"));

app.use("/auth", authRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("server staarted");
});
