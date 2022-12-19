import './IconCard.css'
import * as Bootstrap from "react-icons/bs";
import React from 'react';

const IconCard = ({ iconString, title, text }) => {
  const icon = React.createElement(Bootstrap[iconString]);
  return ( 
    <div className="icon-card-div">
      <div className="icon-div">
        <div className="icon-box">
          <span className="icon-card-icon">{icon}</span>  
        </div>
      </div>
      <div className="text-section">
        <h4 className="h4-text">{title}</h4>
        <p className="p-text icon-card-text">{text}</p>
      </div>
    </div>
  );
}
 
export default IconCard;