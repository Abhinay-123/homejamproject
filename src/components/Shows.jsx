import React from "react";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';


function Shows(props){
    return(
     <div className="upcoming_shows">
     <div className="back_card">
     <div className="front_card">
         <div>
             <img className="first_img"src={props.img}/>
         </div>

         <div>
             <p className="prof">{props.position}</p>
             <p className="name_at">{props.name}</p>
         </div>

         <div>
         <div><p className="info">{props.more}</p></div>
         <div className="arrow"><ArrowForwardOutlinedIcon /></div>
         <div className="img_logo">
             {/* <img  src={props.img2}/> */}
             <ConfirmationNumberIcon />
         </div>
         </div>
     </div>
</div>
     </div>
    );
}
export default Shows;