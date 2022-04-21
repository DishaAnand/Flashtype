import React from 'react';
import TestLetter from '../TestLetter/TestLetter';
import './TypingChallenge.css';

const TypingChallenge=({timerStarted,timeRemaining,testInfo,handleUserInput})=>{
    return(
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:
                {timeRemaining >=10?timeRemaining:`0${timeRemaining}`}</p>
                <p className="timer-info">
                    {!timerStarted && "start typing"}
                </p>
            </div>
             <div className="textarea-container">
                 <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {/* {selectedParagraph} */}
                        {
                            testInfo.map((individualLetterInfo,index)=>{
                                return (
                                <TestLetter 
                                individualLetterInfo={individualLetterInfo}/>
                                    );
                            
                        })
                        }
                    </div>

                 </div>
                 <div className="textarea-right">
                     <textarea
                        onChange={(e)=>handleUserInput(e.target.value)}
                        className="textarea"
                        placeholder="start typing here"
                     
                     >

                     </textarea>
                 </div>
             </div>
        </div>
     );
}

export default TypingChallenge;