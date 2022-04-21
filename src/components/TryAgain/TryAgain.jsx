import React from 'react'
import "./TryAgain.css"

const TryAgain=({words,characters,wpm,startAgain})=>{
    return <div className="try-again">
        <h1>Test Results</h1>
        <div className="result-container">
            <p>
                <b>
                    characters:
                </b>{characters}
            </p>
            <p>
                <b>
                    words:
                </b>{words}
            </p>
            <p>
                <b>
                    wpm:
                </b>{wpm}
            </p>
        </div>

        <div>
            <button onClick={()=>startAgain()} className="buttons start-again">Re-try</button>
            <button 
                onClick={()=>{
                    window.open("https://www.facebook.com.sharer/sharer.php?u=TLP","facebook-share-dialog","width=800,height=600");
                }}
            
            
            className="buttons share-again">Share</button>
            <button 
                onClick={()=>{
                    window.open(
                        "https://twitter.com/intent/tweet?text=theleanprogammer.com","Twitter","width=800,height=600");
                    
                }}
            className="buttons tweet-btn">Tweet</button>
        </div>
    </div>

};
export default TryAgain;