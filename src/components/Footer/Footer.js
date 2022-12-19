import './Footer.css'
import logo from '../../img/logo.svg'

const Footer = () => {
  return ( 
    <div className="footer-div">
      <div className="container">
        <div className="footer-logo-div">
          <img src={logo} alt="" />
        </div>
        <div className="footer-details">
          <div className="overview">
            <li className="footer-link-header">Overview</li>
            <li className="footer-link">Overview</li>
            <li className="footer-link">Landings</li>
            <li className="footer-link">Company</li>
            <li className="footer-link">Pricing</li>
            <li className="footer-link">CMS Pages</li>
            <li className="footer-link">Accounts</li>
            <li className="footer-link">Buy for Figma</li>
          </div>
          <div className="pages">
            <li className="footer-link-header">Pages</li>
            <li className="footer-link">Landing 1</li>
            <li className="footer-link">Landing 2</li>
            <li className="footer-link">Landing 3</li>
            <li className="footer-link">Company 1</li>
            <li className="footer-link">Company 2</li>
            <li className="footer-link">Company 3</li>
            <li className="footer-link">Blog 1</li>
            <li className="footer-link">Blog 2</li>
            <li className="footer-link">Contact 1</li>
            <li className="footer-link">Contact 2</li>
            <li className="footer-link">Contact 3</li>
            <li className="footer-link">Accounts</li>
            <li className="footer-link">Buy for Figma</li>
          </div>
          <div className="pages">
            <li className="footer-link-header">Case Studies</li>
            <li className="footer-link">Careers</li>
            <li className="footer-link">Pricing 1</li>
            <li className="footer-link">Pricing 2</li>
            <li className="footer-link">Pricing 3</li>
            <li className="footer-link">Login</li>
            <li className="footer-link">Register</li>
            <li className="footer-link">Forgot Password</li>
            <li className="footer-link">Blog Post</li>
            <li className="footer-link">Team Member</li>
            <li className="footer-link">Case Study</li>
            <li className="footer-link">Job Post</li>
          </div>
          <div className="email-subscribe">
            <div className="form">
              <input type="email" name="" id="" placeholder='Email Address' />
              <button className='subscribe-button'>Get Started</button>
            </div>
            <div className="opus-for-others">
              <div className="opus-webflow">
                <p className="footer-link-header">opus for webflow</p>
                <p className="footer-lorem-ipsum">Lorem Ipsum</p>
              </div>
              <div className="opus-figma">
                <p className="footer-link-header">opus for figma</p>
                <p className="footer-lorem-ipsum">Lorem Ipsum</p>
              </div>
              <div className="copyright">
                <p className="copyright-text">© Template by <span>Lorem</span> - Powered by <span>Ipsum</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="bottom-bar-links">
            <p className="bottom-bar-link">Style Guide</p>
            <p className="bottom-bar-link">Licence</p>
            <p className="bottom-bar-link">Changelog</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;