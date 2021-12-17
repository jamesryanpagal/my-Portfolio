import React, { useState } from "react";
import "./App.css";

// Component
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import Aboutme from "./Components/Aboutme/Aboutme";
import Footer from "./Components/Footer/Footer";

import AddSkills from "./Components/Actions/AddSkills/AddSkills";
import AddProjects from "./Components/Actions/AddProjects/AddProjects";
import AddCertificates from "./Components/Actions/AddCertificates/AddCertificates";

function App() {
  // ---------- STATE -----------

  // toggle action state
  const [showActions, setShowActions] = useState(false);

  // toggle add skills state
  const [showAddSkills, setShowAddSkills] = useState(false);

  // toggle add projects state
  const [showAddProjects, setShowAddProjects] = useState(false);

  // toggle add certificate state
  const [showAddCertificates, setShowAddCertificates] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Certificates />
      <Aboutme />
      <Footer />
      <section className="actions">
        {/* ACTIONS OPTIONS */}
        {showActions && (
          <section className="actionsOption_Container">
            <button type="button" onClick={() => setShowAddSkills(true)}>
              Skills
            </button>
            <button type="button" onClick={() => setShowAddProjects(true)}>
              Projects
            </button>
            <button type="button" onClick={() => setShowAddCertificates(true)}>
              Certificates
            </button>
          </section>
        )}
        <button
          className="buttonAction"
          type="button"
          onClick={() => setShowActions((prev) => !prev)}
        >
          <i className="fas fa-plus"></i>
        </button>
      </section>
      {/* ACTIONS COMPONENT */}
      {showAddSkills && <AddSkills setShowAddSkills={setShowAddSkills} />}
      {showAddProjects && (
        <AddProjects setShowAddProjects={setShowAddProjects} />
      )}
      {showAddCertificates && (
        <AddCertificates setShowAddCertificates={setShowAddCertificates} />
      )}
    </div>
  );
}

export default App;
