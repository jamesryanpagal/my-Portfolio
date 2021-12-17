import React, { useState, useEffect } from "react";
import axiosConfig from "../../Helper/axiosConfig/axiosConfig";

// images
import projectsImage from "../../Images/projects.png";

// css
import "./Projects.css";

const Projects = () => {
  // ----------- STATE ----------

  // projects state
  const [projects, setProjects] = useState([]);

  // project index state
  const [project, setProject] = useState(0);

  // update project state
  useEffect(() => {
    if (project > projects.length - 1) {
      setProject(0);
    } else if (project < 0) {
      setProject(projects.length - 1);
    }
  }, [project, projects]);

  // get projects
  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await axiosConfig.get("CreateProject/getProjects");
        setProjects([...data]);
      } catch (error) {
        console.log(error);
      }
    };

    getProjects();
  }, []);

  return (
    <div className="projects_Container" id="Projects">
      {/* PROJECTS IMAGE CONTAINER */}
      <section data-aos="fade-right" className="projectsImage_Container">
        <h1>Projects</h1>
        <img src={projectsImage} alt="" />
      </section>
      {/* PROJECTS */}
      <section className="projectsDetails_Container">
        {/* PROJECT VIEWER */}
        <section className="viewProject_Container">
          {/* LEFT TOGGLE */}
          <button type="button" onClick={() => setProject((prev) => prev - 1)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          {/* VIEW */}
          <section className="view" data-aos="fade-left">
            {projects[project] !== undefined && (
              <section className="project">
                <img src={projects[project].projectimage} alt="" />
                {/* LINK */}
                <section className="link_Container">
                  <a
                    className="codes"
                    href={projects[project].codelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Codes
                  </a>
                  <a
                    className="open"
                    href={projects[project].websitelink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open
                  </a>
                </section>
              </section>
            )}
          </section>
          {/* RIGHT TOGGLE */}
          <button type="button" onClick={() => setProject((prev) => prev + 1)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </section>
      </section>
    </div>
  );
};

export default Projects;
