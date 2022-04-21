import React from 'react'
import ChallengeCard from '../challengecard/ChallengeCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import "./Typing.css"

const Typing=({selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    handleUserInput})=>{
        console.log('inside typing',testInfo)
    return( 
        <div className="typing">
            <div className="details">
                <ChallengeCard cardName="words" cardValue={words}/>
                <ChallengeCard cardName="characters" cardValue={characters}/>
                <ChallengeCard cardName="wpm" cardValue={wpm}/>
            </div>
            <div className="typewriting">
                <TypingChallenge timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                selectedParagraph={selectedParagraph}
                testInfo={testInfo}
                handleUserInput={handleUserInput}/>
            </div>
        </div>
        

    );
}

export default Typing;