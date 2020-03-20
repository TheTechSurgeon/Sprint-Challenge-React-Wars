import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
background: black;
border-radius: 20px;
color:white;
height:400px;
width;400px;
padding:100px 0;
border: 10px blue;
margin: 50px;
`;

const NameCard = props =>{
   return(
    
     <Wrapper key={props.index}>
         <h3>Name</h3>
         <p>{props.name}</p>
         <h3>Homeworld</h3>
         <p>{props.homeworld}</p>
     </Wrapper>
     
     )
}

export default NameCard;