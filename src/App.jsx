import React from 'react'

const App = () => {
  return (
    <div>
  import React from "react";

{/* const App = () => { */}
  return (
    <div>
      {/* <!-- NAV BAR --> */}
      <header>
        <div ClassName="nav-link">
          <a target="_blank" href="./HTML PROJECT/classwork.html">
            Home
          </a>
        </div>
        <div ClassName="nav-link">
          <a href="./HTML PROJECT/index.html">About</a>
        </div>
        <div ClassName="nav-link">
          <a href="">Contact us</a>
        </div>
        <div ClassName="nav-link">
          <a href="">Services</a>
        </div>
      </header>

      {/* <!-- HERO SECTION --> */}
      <div ClassName="hero-section">
        <div ClassName="overlay">
          <div ClassName="text">
            <h1>Welcome to my Web page</h1>
            <p>
              learn fullstack development, UI/UX, Graphics Design and so on
              <div>
                <button>Get Started</button>
              </div>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT SECTION --> */}
      <section ClassName="about">
        <div ClassName="about-text">
          <h3>Meet The Owner</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            maiores aliquid laborum, recusandae tenetur aspernatur nulla commodi
            debitis fugit laudantium cumque libero consequatur ex expedita!
          </p>
          <button>Know More</button>
        </div>
        <div ClassName="img">
          <img src="../../../justine.jpg" alt="pix" />
        </div>
      </section>
      {/* <!-- TESTIMONY --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students Says</h2>
        <div ClassName="testimonials-container">
          <div ClassName="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Chinonye Lilian Onyeulor</h3>
            <p>
              This academy Completely Changed my career. i leant web development
              from the scratch to finish and got my first job
            </p>
          </div>
          <div ClassName="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Zim Dustan</h3>
            <p>
              After i learnt web design here i got a good paying foreign Job
            </p>{" "}
          </div>
          <div ClassName="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Sylvia </h3>
            <p>
              After learning my programme here i had the oppotunity to meet with
              the president of the united state
            </p>{" "}
          </div>
        </div>
      </section>

      {/* <!-- CALL TO ACTION SECTION --> */}
      <section ClassName="cta">
        <div ClassName="cta-content">
          <h2>Ready To Start Your Learning Journey?</h2>
          <p>
            Join Us today and start learning practical digital skills that can
            transform your future.
          </p>
          <a href="#" ClassName="cta-button">
            {" "}
            Get Started
          </a>
        </div>
      </section>

      {/* <!-- FOOTER --> */}

      <footer ClassName="footer">
        <div ClassName="footer-container">
          {/* ABOUT */}

          <div ClassName="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div ClassName="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div class="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 800 000 0000</p>

            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div class="copyright">
          <p>© 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
{/* }; */}

    </div>
  )
}

export default App
