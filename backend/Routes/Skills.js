const router = require("express").Router();

// Controller
const { createSkills, getSkills } = require("../Controller/Skills_Controller");

router.route("/").post(createSkills);

router.route("/getSkills").get(getSkills);

module.exports = router;
