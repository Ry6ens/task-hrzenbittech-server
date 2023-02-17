const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const env = require("./config");
const appRouter = require("./routes/api/applications");

const app = express();

app.use(morgan("env"));
app.use(cors());
app.use(express.json());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use("/api", appRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

app.listen(env.port, () => console.log(`Server listening on port ${env.port}`));

module.exports = app;
