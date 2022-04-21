import React from 'react';
import Test from '../Test/Test';
import "./Challenge.css"

const Challenge=({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    handleUserInput,
    startAgain,

})=>{
    return(
        <div className="challenge-section">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take speed test now!
            </h1>
            <Test words={words} 
            characters={characters}
            wpm={wpm} 
            timeRemaining={timeRemaining} 
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            testInfo={testInfo}
            handleUserInput={handleUserInput}
            startAgain={startAgain}
            />
        </div>

    );
}

export default Challenge;