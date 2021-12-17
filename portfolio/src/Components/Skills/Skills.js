import React, { useState, useEffect } from "react";
import axiosConfig from "../../Helper/axiosConfig/axiosConfig";
import Aos from "aos";
import "aos/dist/aos.css";

// images
import skillsImage from "../../Images/skillsImage.png";

// css
import "./Skills.css";

const Skills = () => {
  // ------------- STATE ----------
  const [skills, setSkills] = useState([]);

  // INITIALIZE AOS
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Get skills
  useEffect(() => {
    const getSkills = async () => {
      const { data } = await axiosConfig.get("Skills/getSkills");
      setSkills([...data]);
    };

    getSkills();
  }, []);

  return (
    <div className="skills_Container" id="Skills">
      {/* SKILLS IMAGE CONTAINER */}
      <section data-aos="fade-right" className="skillsImage_Container">
        <h1>Skills</h1>
        <img src={skillsImage} alt="" />
      </section>
      {/* SKILLS */}
      <section className="skillsDetails_Container">
        {skills.map((skill, i) => {
          return (
            <section key={i} data-aos="fade-left" className="skill">
              {skill.skill}
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
