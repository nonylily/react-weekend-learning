import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="about-text">
          <h3>Meet The Owner</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            maiores aliquid laborum, recusandae tenetur aspernatur nulla commodi
            debitis fugit laudantium cumque libero consequatur ex expedita!
          </p>
          <button>Know More</button>
        </div>
        <div className="img">
          <img src="../../../justine.jpg" alt="pix" />
        </div>
      </section>
    </div>
  );
};

export default About;
