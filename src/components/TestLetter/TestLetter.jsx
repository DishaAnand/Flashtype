import React from 'react'
import "./TestLetter.css"

const TestLetter=({individualLetterInfo})=>{
    const {status}=individualLetterInfo
    

    const statusClass={
        correct:"correct",
        incorrect:"incorrect",
        notattempted:"notattempted"
    }[status]

    
    return(
        <span className={`test-letter ${statusClass}`}>{individualLetterInfo.testLetter}</span>
    );
}

export default TestLetter;