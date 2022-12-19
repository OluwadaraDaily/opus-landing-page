import './Header.css'
import logo from '../../img/logo.svg'
import Button from '../Button/Button'
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
          <ul className='links'>
            <li className="link">Overview</li>
            <li className="link">Pages</li>
            <li className="link">Template</li>
          </ul>
        </div>
        <div className="contact-us">
          <Button text="Contact Us" />
        </div>
      </div>
    </header>
  );
}
 
export default Header;