import React from 'react';
// import ProjectItem from './ProjectItem';
// import { ProjectList } from '.helpers/ProjectList';

import './styles/Portfolio.css';
import Proj1 from './Assets/image1.jpg';
import Proj2 from './Assets/image2.jpg';
import Proj3 from './Assets/image3.jpg';
import Proj4 from './Assets/image4.jpg';
import Proj5 from './Assets/image5.jpg';
import Proj6 from './Assets/image6.jpg';


const Portfolio = () => {
    return (
        <section className='Portfolio'>
            <h1>Portfolio</h1>

            <div className='cart-container'>
                <div className='cart'>
                    <img src={Proj1} alt="" a href= "https://codescape.netlify.app" />
                    <p>Codescape</p>
                </div>

                <div className='cart'>
                    <img src={Proj2} alt="" a href= "https://24rgraham.github.io/recipe-project/" />
                    <p>Recipe of the Day</p>
                </div>

                <div className='cart'>
                    <img src={Proj3} alt="" a href= "https://team7-wishlist-app.herokuapp.com/" />
                    <p>Ultimate Wishlist</p>
                </div>

                <div className='cart'>
                    <img src={Proj4} alt="" a href= "https://machikon.github.io/CodingQuestions/" />
                    <p>Coding Questions</p>
                </div>

                <div className='cart'>
                    <img src={Proj5} alt="" a href= "https://github.com/Machikon/WorkDayScheduler" />
                    <p>Workday Scheduler</p>
                </div>

                <div className='cart'>
                    <img src={Proj6} alt="" a href= " https://notes-project2.herokuapp.com" />
                    <p>Note Taker</p>
                </div>
                
            </div>

        </section>

//         <div className='portfolio'>
//             <h1> My Projects</h1>
//             <div className='projectList'>
//                {ProjectList.map((project) => {
//                 return <ProjectItem name={project.name} image={project.image} />;
//                })}
             


//             </div>

//         </div>
    )
}

export default Portfolio