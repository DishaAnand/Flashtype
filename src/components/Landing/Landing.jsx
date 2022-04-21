import React from 'react';
import './Landing.css';
import hero from './../../assets/hero.png';
import Typewriter from 'typewriter-effect';

const Landing=()=>{
    return(
        <div className="landing-container">
            <div data-aos="fade-right"></div>
            <div className="p-landing-left">
                <h1 className="landing-header">can you type</h1>
                <div className="type-container">
                <Typewriter
                    options={{
                      strings: ['Fast?', 'Correct?','Quick'],
                      autoStart: true,
                      loop: true,
                }}
/>
                </div>
            </div>
            <div className="landing-right">
                <img data-aos="fade-left"
                className="flash-image" src={hero} alt="hero" />
            </div>
        </div>
    );
}
export default Landing;