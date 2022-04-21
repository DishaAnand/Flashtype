import React from 'react'

import "./ChallengeCard.css";
const ChallengeCard=({cardName,cardValue})=>{
    return(
        <div className="details-card">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>

    )

}
export default ChallengeCard;