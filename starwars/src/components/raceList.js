import React, {useState, useEffect} from "react";
import axios from "axios";
import raceCard from "./raceCard"

export default function raceList(){
    const [swapiData, setSwapiData] = useState([])
        
        
    useEffect(() =>{
        axios
            .get(
                "https://swapi.co/api/species/"
            )
            .then(response => {
                setSwapiData(response);
                
            })
            .catch(error=>{
                console.log(error)
            });
        },[])
    
        return(
            <div className="character-info">
            {swapiData.map(banana => {
              return (
                <raceCard
                  key={banana.index}
                  name={banana.name}
                  gender={banana.gender}
                />
              );
            })}
             </div>
          ) 
    
    }
       