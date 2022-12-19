import * as Bootstrap from "react-icons/bs";
import React from 'react';
import './Body.css'
import Button from '../Button/Button';
import AnalyticTile from '../AnalyticTile/AnalyticTile';
import ImageTextCard from '../ImageTextCard/ImageTextCard';
import Card from '../Card/Card';
import IconCard from '../IconCard/IconCard';
import img01 from '../../img/img-01.png'
import partner1 from '../../img/partner-01.svg'
import partner2 from '../../img/partner-02.svg'
import partner3 from '../../img/partner-03.svg'
import partner4 from '../../img/partner-04.svg'
import play from '../../img/play.svg'
import videoImage from '../../img/video-image.png'
import bgImg1 from '../../img/bg-1.png'
import checkMark from '../../img/check.svg'
import featuresImg from '../../img/features-img.png'
import knowledgeImg from '../../img/our-knowledge-img.png'
import stampsImg from '../../img/stamps-img.svg'
import designerImg from '../../img/designer-img.png'

const Body = () => {
  const itcInfo = [
    { imgName: 'itc-img-1', title: 'Project Management', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.' },
    { imgName: 'itc-img-2', title: 'Advanced Analytics', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.' },
    { imgName: 'itc-img-3', title: 'Marketing & Dashboard', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.' }
  ]

  const iconCards = [
    { title: 'Choose your sections', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: 'BsFillCursorFill' },
    { title: 'Add the images and text you need', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', icon: 'BsCardImage' },
  ]

  const articles = [
    { 
      imgName: 'article-img-1',
      title: 'A high-converting, high-performing template',
      text: 'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.',
      textColor: '#37456C',
      buttonText: 'Read Article',
      buttonColor:  '#F7F9FC'
    },
    { 
      imgName: 'article-img-2',
      title: 'With a clean, minimal and professional look',
      text: 'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.',
      textColor: '#37456C',
      buttonText: 'Read Article',
      buttonColor:  '#F7F9FC'
    },
    { 
      imgName: 'article-img-3',
      title: 'Opus made our journey possible',
      text: 'Turpis senectus amet tortor in sodates odio tettus. Pretium id amet, euismod sceteriscue vetit.',
      textColor: '#37456C',
      buttonText: 'Read Article',
      buttonColor:  '#F7F9FC'
    }
  ]

  const leftArrow = React.createElement(Bootstrap["BsArrowLeftShort"]);
  const rightArrow = React.createElement(Bootstrap["BsArrowRightShort"]);
  return ( 
    <section className="main-body">
      
      {/* Section 1 */}
      <div className="section-01">
        <div className="blue-box-div">
          <div className="blue-box"></div>
        </div>
        <div className="content-section">
          <div className="container">
            <div className="text-div">
              <h1 className='h1-text'>Built for enterprise businesses</h1>
              <p className='text'>
                Opus includes everything you need to build a beautiful website for your business.
                Built to perform and look good doing so.
              </p>
            </div>
            <div className="btn-div">
              <Button text='Contact Us' iconString='BsArrowRightShort'/>
            </div>
            <p className="text">Explore Pages</p>
            <div className="img-div">
              <img src={img01} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section-02">
        <div className="container">
          <h3 className="h3-text">Trusted and loved by the world’s best teams</h3>
          <div className="partner-logos">
            <img src={partner4} alt="" />
            <img src={partner2} alt="" />
            <img src={partner1} alt="" />
            <img src={partner3} alt="" />
          </div>
          <div className="data-analytics">
            <AnalyticTile title="99.95%" subTitle="Accuracy Rate" text="in fulfilling orders" />
            <AnalyticTile title="5,000+" subTitle="Ecommerce businesses" text="partner with Opus" />
            <AnalyticTile title="99.96%" subTitle="Of orders ship on time" text="within SLA" />
            <AnalyticTile specialTitleChar="#" title="1" subTitle="Best Fulfillment Technology" text="by AdWeek’s Retail Awards" />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section-03">
        <div className="container">
          <div className="video-main-div">
            <div className="video-title-div">
              <p className="video-title">Video Title</p>
            </div>
            <h1 className="h1-text">Inform users with video sections</h1>
            <div className="video">
              <img src={videoImage} className="video-image" alt="" />
              <img src={play} className="play-btn" alt="" />
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras eget consectetur eros. Aliquam erat volutpat.
              Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
            </p>
          </div>
          <div>
            <h1 className="h1-text">Make your site better with Opus</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras eget consectetur eros. Aliquam erat volutpat.
              Praesent pulvinar arcu non lectus dapibus, a pulvinar mauris aliquam.
            </p>
            <Button text="Learn More" padding="0 20px" />
          </div>
          <div className='info-cards'>
            <img src={bgImg1} className="info-cards-bg" alt="" />
            <Card imgName="arrow" text="Build or Customize a Website in Minutes"/>
            <Card imgName="arrow-vector" text="Our UI Kit was made for creativity."/>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="section-04">
        <div className="container">
          <div className="call-to-action">
            <h1 className="h1-text">Ways to work with us</h1>
            <Button text="Get Started" />
          </div>
          <div>
            {itcInfo.map((item, index) => (
              <ImageTextCard key={index} imgName={item.imgName} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="section-05">
        <div className="container">
          <div className="main-card">
            <h2 className="h2-text">Create pages using beautiful components.</h2>
            <div className="call-to-action">
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <Button text="Learn More" />
            </div>
          </div>
          <div className="icon-cards">
            {iconCards.map((item, index) => (
              <IconCard key={index} iconString={item.icon} title={item.title} text={item.text} />
            ))}
          </div>
        </div>

      </div>

      {/* Section 6 */}
      <div className="section-06">
        <div className="container">
          <div className="features-div">
            <div className="features-title">
              <h4>Features</h4>
            </div>
            <div className='features-tagline'>
              <h1 className="h2-text">You're not just doing business. You're doing life</h1>
            </div>
            <div className='features-list'>
              <div className="features-item">
                <img src={checkMark} alt="" />
                <p className="features-text">Responsive Components</p>
              </div>
              <div className="features-item">
                <img src={checkMark} alt="" />
                <p className="features-text">Over 50 Sections</p>
              </div>
              <div className="features-item">
                <img src={checkMark} alt="" />
                <p className="features-text">Handcrafted Pages</p>
              </div>
            </div>
            <div className="features-img">
              <img src={featuresImg} alt="" />
            </div>
          </div>
          <div className="our-knowledge-div">
            <div className="features-title">
              <h4>Our Knowledge</h4>
            </div>
            <div className='our-knowledge-text'>
              <h1 className="h2-text">A UI Kit that's Modern & Elegant</h1>
              <p className="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget consectetur eros. Aliquam erat volutpat.</p>
            </div>
            <div>
              <img src={knowledgeImg} alt="" />
            </div>
          </div>
          <div className="stamps">
            <div className="stamps-img">
              <img src={stampsImg} alt="" />
            </div>
            <div className="stamps-info">
              <h4 className="h4-text">
                The Opus UI Kit lets you showcase your work in style. It's helped take our business online
              </h4>
              <div className="designer-info">
                <p className="designer-name">Alexa F.</p>
                <p className="designer-title">Designer <span>@Stamps</span></p>
              </div>
              <div className="toggle">
                <div className="left-toggle">
                  <i className='left-arrow-icon'>{leftArrow}</i>
                </div>
                <div className="right-toggle">
                  <i className='right-arrow-icon'>{rightArrow}</i>
                </div>
              </div>
            </div>
            <div className="designer">
              <img src={designerImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div className="section-07">
        <div className="container">
          <div className="resources-title">
            <h1 className="h1-text">Resources</h1>
            <Button text="Get Started"/>
          </div>
          {articles.map((item, index) => (
            <ImageTextCard 
              key={index}
              imgName={item.imgName}
              title={item.title}
              text={item.text}
              textColor={item.textColor}
              buttonText={item.buttonText}
              buttonColor={item.buttonColor}
            />
          ))}
        </div>
      </div>
    </section> 
  ); 
}
 
export default Body;
