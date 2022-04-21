import React from 'react';
import TryAgain from '../TryAgain/TryAgain';
import Typing from '../typing/Typing';
import "./Test.css"

const Test=({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    handleUserInput,
    startAgain
})=>{
   
    return(
        <div className="test-container">
            {
                timeRemaining>0?(
                    <div data-aos="fade-up" className="typing-challenge">
                    <Typing 
                    selectedParagraph={selectedParagraph}
                    timerStarted={timerStarted}
                    timeRemaining={timeRemaining}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    testInfo={testInfo}
                    handleUserInput={handleUserInput}
                    />
                </div>
                    
                ):(
                    <div className="try-again">
                <h1>
                    <TryAgain words={words} characters={characters} wpm={wpm} startAgain={startAgain}/>
                </h1>
            </div>

                )
            }
           
            
        </div>
    );
}

export default Test;