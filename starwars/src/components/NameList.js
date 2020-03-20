import React, {useState, useEffect} from "react";
import axios from "axios";
import NameCard from "./NameCard"

export default function NameList(){
    const [swapiData, setSwapiData] = useState([])
        
        
    useEffect(() =>{
        axios
            .get(
                `https://swapi.co/api/species/`
            )
            .then(response => {
                setSwapiData(response.data.results)
                console.log(swapiData)
                
            })
            .catch(error=>{
                console.log(error)
            })
        },[])
    
        return(
            
            <div className="">
            {swapiData.map(banana => 
              
                <NameCard
                  key={banana.index}
                  name={banana.name}
                  homeworld={banana.homeworld}
                />
              
            )}
             </div>
          ) 
    
    }
       