const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contacts");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(4000, () => {
  console.log("Connected to backend.");
});
