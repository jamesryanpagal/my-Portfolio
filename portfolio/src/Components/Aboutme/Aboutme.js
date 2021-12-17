import React from "react";

// images
import aboutmeImage from "../../Images/aboutme.png";

// css
import "./Aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutme_Container" id="Aboutme">
      {/* ABOUT ME IMAGE CONTAINER */}
      <section data-aos="fade-right" className="aboutmeImage_Container">
        <h1>About me</h1>
        <img src={aboutmeImage} alt="" />
      </section>
      {/* ABOUT ME */}
      <section data-aos="fade-left" className="aboutmeDetails_Container">
        <p>
          Proficient in Web development. I love creating website and it is now
          much easier and faster to create one thanks for the help of different
          stacks. I'm a hardworking type of person, Almost all of my task
          related or not to programming was finished on and before the deadline.
          I can also do a certain task even under pressure or in a rush. One of
          my advantage to other is that I am a good listener and a fast learner.
        </p>
      </section>
    </div>
  );
};

export default Aboutme;
