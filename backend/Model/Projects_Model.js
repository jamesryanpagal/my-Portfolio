const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projectsSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    codelink: {
      type: String,
      required: true,
    },
    websitelink: {
      type: String,
      required: true,
    },
    projectimage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model("projects", projectsSchema);
module.exports = Projects;
