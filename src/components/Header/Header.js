import './Header.css'
import logo from '../../img/61779b485e784e7e77620967_Logo.svg.svg'
const Header = () => {
  return ( 
    <header>
      <div className="header-div">
        <div className="logo">
          <img src={logo} alt="Opus Logo" />
        </div>
        <div className="menu">
          <div className="hamburger">
            <div className="ham-slice"></div>
            <div className="ham-slice"></div>
            <div className="ham-slice"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;