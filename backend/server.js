require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// ------- IMPORT ROUTES --------
const ProjectsRoutes = require("./Routes/Projects");
const SkillsRoutes = require("./Routes/Skills");
const CertificatesRoutes = require("./Routes/Certificates");

// -------- PORT ---------
const PORT = process.env.PORT || 8585;

// ------ PATH --------
const path = require("path");

// ------- SERVER MIDDLEWARE --------
app.use(cors());
app.use(express.json());

// ----- CONNECT TO MONGODB ---------
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once("open", () => console.log("Connected to database"));

// ----------------------------- DEPLOYMENT ---------------------------
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/portfolio/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "portfolio", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Running");
  });
}

// -------- ROUTES --------
app.use("/CreateProject", ProjectsRoutes);
app.use("/Skills", SkillsRoutes);
app.use("/Certificates", CertificatesRoutes);

app.listen(PORT, () => console.log(`running on port ${PORT}`));
