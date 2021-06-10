import React from "react";
import Card from "./Card";
import Contact from "../Contact";
import Shows from "./Shows";
import Data from "../Data";
import Review from "./Review";
import Memo from "../Memo";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';


function creatEntry(Contact){
    return <Card 
        icon={Contact.icon}
        icon2={Contact.icon2}
        number={Contact.number}
        text={Contact.text}
    />
    
}
function comingShow(Data){
    return <Shows 
        img={Data.img}
        position={Data.position}
        name={Data.name}
        more={Data.more}
        img2={Data.img2}
    />
}
function reviewsGood(Memo){
    return <Review 
        img={Memo.img}
        name={Memo.name}
        address={Memo.address}
        text={Memo.text}
    />
}

function App(){
    return(


<div>
<div>
  <img className="cover_img" src="/image/Rectangle 157.png"/>
  </div>
  <div >
  <div className="head">
    <div className="logo"><img  src="/image/image 52.png"/></div>
    <div className="options">
      <ul>
        <li> <SearchIcon />  Search</li>
        <li>Help</li>
        <li>Account</li>
      </ul>
    </div>
    <div className="about">
  <p>Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</p>
</div>
  </div>
</div>
 <div className="card_1">
<div className="Topic">
<h1>cari cari</h1>
</div>
<dl className="dictionary">{Contact.map(creatEntry)}</dl>
</div>
<div className="upcoming">
<div><div><a><u>Up</u>coming Shows</a></div>
<div className="view"><p>View All</p></div>
</div>
<div>
<dl className="show">{Data.map(comingShow)}</dl>
{/* <Shows />
<Shows />
<Shows />
<Shows /> */}
</div>
</div>


<div  className="last_section">
<div>
<div className="first"><h1><u>Re</u>views</h1></div>
<div className="secound"><p>1/2<ArrowBackIcon />  <ArrowForwardIcon /> </p></div>
    
</div>
<dl className="goodReview">{Memo.map(reviewsGood)}</dl>
</div>

</div>
    
    );
}
export default App;
