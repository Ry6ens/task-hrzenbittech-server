const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contacts");

dotenv.config();

const { PORT = 4000 } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => {
  console.log("Connected to backend.");
});
