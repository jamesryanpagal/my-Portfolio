const mongoose = require("mongoose");
const schema = mongoose.Schema;

const skillsSchema = new schema(
  {
    skill: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Skills = mongoose.model("skills", skillsSchema);
module.exports = Skills;
