import './AnalyticTile.css'
const AnalyticTile = ({ specialTitleChar, title, subTitle, text }) => {
  return ( 
    <div className="tile-div">
      <h3 className="tile-title">{ specialTitleChar && <span style={{ color: "#DADDE7" }}>{ specialTitleChar }</span> }{title}</h3>
      <p className="tile-subtitle">{subTitle}</p>
      <p className="tile-text">{text}</p>
    </div>
  );
}
 
export default AnalyticTile;