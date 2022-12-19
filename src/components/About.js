import React from "react";
import "./styles/About.css";
import me from "./Assets/MachikoC.JPG";

const About = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="text">
          <h1>About Me</h1>
          <h1 className="h1-big">Hello!</h1>

          
          <p>
            I am a new full-stack web developer and an experienced accountant.
            My passion for the web development is driven by My own experience in
            my accounting career. 
            More and more businesses and organizations utilize their own websites to generate sales or to establish brands
            nationally or internationally. Front-end technologies have significant impacts on those sales and recognitions becasue of the
            client-side interactions and experiences. 
            Additionally, I have seen that many businesses are moving toward data-driven strategies to
            meet customer demands and to provide more enhanced services and goods. I made the first step to become a “modern professional,” who
            has a full understanding of multiple key business functions for the new era of digitalization.
          </p>

            <div className="image">
                <img src={me} alt="" />

            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
