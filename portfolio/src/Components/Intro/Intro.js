import React from "react";

// images
import myImage from "../../Images/myImage.png";

// css
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro_Container">
      {/* MY DETAILS */}
      <section className="details_Container">
        {/* TEXT */}
        <section className="text_Container">
          <h1>
            Hi! I'm <span>Ryan</span>
          </h1>
          <h1>
            I'm a <span>Web developer</span>
          </h1>
          <p>
            I use one of the top library/framework to deliver fast and quality
            website
          </p>
        </section>
      </section>
      {/* INTRO IMAGES */}
      <section className="introImage_Container">
        <img src={myImage} alt="" />
      </section>
    </div>
  );
};

export default Intro;
