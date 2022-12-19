import Button from '../Button/Button';
import './ImageTextCard.css'

const ImageTextCard = ({ imgName, title, text, buttonText, buttonColor, textColor }) => {
  let _textColor
  textColor ? _textColor = textColor : _textColor = '#B6BCCE'
  return ( 
    <div className="image-text-card-div">
      <div className='itc-img'>
        <img src={`${process.env.PUBLIC_URL}/img/${imgName}.png`} alt="" />
      </div>
      <div className='itc-text-section'>
        <h4 className="h4-text">{title}</h4>
        <p className="p-text" style={{ color: `${_textColor}` }}>
          {text}
        </p>
        {(buttonText) && <Button text={buttonText} buttonColor={buttonColor} textColor={textColor}/>}
      </div>
    </div>
  );
}
 
export default ImageTextCard;