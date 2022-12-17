import './Button.css'

const Button = ({ text, icon }) => {
  return ( 
     <div className="btn-div">
      <p className="text">{text}</p>
     </div> 
  );
}
 
export default Button;