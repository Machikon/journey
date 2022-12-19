import React from "react";
import './styles/Resume.css';
import Work from './Assets/Work.jpg';

const Resume = () => {
    return(
        <section className="section-2">
            <h1 className="Resume">Resume</h1>   

            <div className="container-2">
                <div className="image-cont">
                    <img src={Work} alt="" />
                </div>

                <div className="text-2">
                    <h2>Front-End</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Responsive Design</p>
                        <p>jQuery</p>
                        <p>Bootstrap</p>

                    <h2>Back-End</h2>
                        <p>APIs</p>
                        <p>Node</p>
                        <p>Express</p>
                        <p>MySQL, Sequelize</p>
                        <p>MongoDB</p>
                        <p>REST</p>

                    

                </div>
                <div className="text-2a">
                <h2>Accounting</h2>
                        <p>Financial Reporting</p>
                        <p>Compliance</p>
                        <p>Internal and External Audit</p>
                        <p>System Implementaiton</p>
                        <p>Reconciliation</p>
                </div>
 
            </div>
        

         </section>

    );
};

export default Resume;