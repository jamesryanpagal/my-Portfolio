const router = require("express").Router();

// Controller
const {
  createProject,
  getProjects,
} = require("../Controller/Projects_Controller");

// Create project
router.route("/").post(createProject);

// Get all projects
router.route("/getProjects").get(getProjects);

module.exports = router;
