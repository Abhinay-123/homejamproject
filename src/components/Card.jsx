import React from "react";

 function Card(props){
     return(
         <div className="circle">
         <div className="icons">
          <p></p>
          <img src={props.icon}/>
          <img className="star"src={props.icon2}/>
          

         </div>
         <div className="label">
           <p>{props.number}</p>
           <p>{props.text}</p>
         </div>

         </div>
         
     );
 }
 export default Card;