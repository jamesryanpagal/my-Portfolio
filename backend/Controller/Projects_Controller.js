// ------------ MODEL ------------
const Projects = require("../Model/Projects_Model");

// Create project
const createProject = async (req, res) => {
  const { title, codelink, websitelink, projectimage } = req.body;
  try {
    const project = await Projects.create({
      title,
      codelink,
      websitelink,
      projectimage,
    });
    res.json(project);
  } catch (error) {
    res.json(error.message);
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { createProject, getProjects };
