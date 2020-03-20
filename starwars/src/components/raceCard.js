import React from "react"


const raceCard = props =>{
   return(
    <raceCard>
     <div key={props.index}>
         <h3>Name</h3>
         <p>{props.name}</p>
         <h3>Homeworld</h3>
         <p>{props.homeworld}</p>
     </div>
     </raceCard>
     )
}

export default characterCard;