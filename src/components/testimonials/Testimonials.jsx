import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students say</h2>
        <div className="testimonials-container">
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Chinonye Lilian Onyeulor</h3>
            <p>
              This academy completely changed my career. I learnt web
              development from scratch to finish and got my first job.
            </p>
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Zim Dustan</h3>
            <p>
              After I learnt web design here, I got a good paying foreign job.
            </p>
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Sylvia</h3>
            <p>
              After learning my programme here, I had the opportunity to meet
              the president of the United States.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
