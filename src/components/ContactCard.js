import React from "react";
import icon from "../images/icon.png";


const ContactCard = (props)=>{
    //destructuring 
    const {Name, LastName} = props.contact;
     return(
        <div className="item">
        <img className="ui avatar image" src={icon} alt="icon"/>
        <div className="content">
         <div className="header">{Name}</div>
         <div>{LastName}  <i 
         className="trash alternate outline icon"
         style={{color:"green" ,marginTop:"8px"}}></i></div>
         </div>
         
      </div>

     );
}
export default ContactCard;