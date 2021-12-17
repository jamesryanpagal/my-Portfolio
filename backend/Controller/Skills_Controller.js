// ------------- MODEL -------------
const Skills = require("../Model/Skills_Model");

// Create skills
const createSkills = async (req, res) => {
  const { skill } = req.body;
  try {
    const create = await Skills.create({
      skill,
    });
    res.json(create);
  } catch (error) {
    res.json(error.message);
  }
};

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.json(skills);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { createSkills, getSkills };
