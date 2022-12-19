import React from 'react';

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
                    <a href= "https://codescape.netlify.app" target="_blank">
                    <img src={Proj1} alt="scenary"/>
                    <p>Codescape</p>
                    </a>
                </div>

                <div className='cart'>
                    <a href= "https://24rgraham.github.io/recipe-project/" target="_blank">
                    <img src={Proj2} alt="scenary"/>
                    <p>Recipe of the Day</p>
                    </a>
                </div>

                <div className='cart'>
                    <a href= "https://team7-wishlist-app.herokuapp.com/" target="_blank">
                    <img src={Proj3} alt="scenary"  />
                    <p>Ultimate Wishlist</p>
                    </a>
                </div>

                <div className='cart'>
                    <a href= "https://machikon.github.io/CodingQuestions/" target="_blank">
                    <img src={Proj4} alt="Ocean"  />
                    <p>Coding Questions</p>
                    </a>
                </div>

                <div className='cart'>
                    <a href= "https://github.com/Machikon/WorkDayScheduler" target="_blank">
                    <img src={Proj5} alt="Ocean"  />
                    <p>Workday Scheduler</p>
                    </a>
                </div>

                <div className='cart'>
                    <a href= " https://notes-project2.herokuapp.com" target="_blank">
                    <img src={Proj6} alt="Ocean"  />
                    <p>Note Taker</p>
                    </a>
                </div>
                
            </div>

        </section>

    )
}

export default Portfolio