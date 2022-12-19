import './Card.css'

const Card = ({ imgName, text }) => {
  console.log('Text =>', imgName)
  return ( 
    <div className='card-div'>
      <div className="icon">
        <img src={`${process.env.PUBLIC_URL}/img/${imgName}.svg`} alt="" />
      </div>
      <div className="card-text">
        <p className="card-h1-text">
          {text}
        </p>
      </div>
    </div>
  );
}
 
export default Card;