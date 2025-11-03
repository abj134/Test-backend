const express = require("express");
const app = express();
const port = 3000;
const sequelize = require("./Database");
const userRouter = require("./Router/User.router");

app.use(express.json());
app.use("/user", userRouter);

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Connected to PostgreSQL and synced.");
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (err) {
    console.error("DB connection failed:", err);
  }
})();
