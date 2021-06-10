import React from "react";


function Review(props){
    return(
        <div className="back_end">
        <div className="front_end">
            <div>
                <img className="review_img" src={props.img}/>
            </div>
            <div className="review_about">
                <p className="review_name">{props.name}</p>
                <p className="review_add">{props.address}</p>
            </div>
            <div className="review_text">{props.text}</div>
        </div>
        </div>
    );
}
export default Review;