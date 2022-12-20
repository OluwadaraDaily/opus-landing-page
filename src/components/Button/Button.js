import './Button.css'
import React from 'react';
import * as Bootstrap from "react-icons/bs";

const Button = ({ text, iconString, buttonColor, textColor }) => {
  let _buttonColor, _textColor
  buttonColor ? _buttonColor = buttonColor : _buttonColor = '#1355FF'
  textColor ? _textColor = textColor : _textColor = '#fff'
  let icon
  if(iconString) {
    icon = React.createElement(Bootstrap[iconString]);
  }
  return ( 
     <div className="btn-div" style={{ backgroundColor: _buttonColor }}>
      <div className="inner-btn-div">
        <p className="btn-text" style={{ color: _textColor }}>{text}</p>
        { iconString && <span className="icon">
          {icon}
        </span> }
      </div>
     </div> 
  );
}
 
export default Button;