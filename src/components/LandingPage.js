import React from 'react'
import { Link } from 'react-router-dom';

import './LandingPage.css';
import fb from "../image/fbimge.png";
import twitter from "../image/twitterimge.png";
import Linkedin from "../image/linkedinimge.png";
import Instgram from "../image/instaimge.png";
// import wavee from '../image/wavee.svg';
import Logo from '../image/Logo.png';
import Logoname from '../image/Logoname.png';
import dietplanning from '../image/diet-planning.svg';
import maslo from '../image/maslo.jpg';
import Frame from '../image/Frame.svg';
import bmi from '../image/bmi.jpg';
import nutritionist_4 from '../image/nutritionist_4.jpg'
import healthylife from '../image/healthylife.jpg'
import Footer from './Footer';



const LandingPage = () => {
  return (
    <>

      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="Logo" className="logoname" />
        </div>
        <ul className="nav-links">
          <li className="nav-link" >How it work</li>
          <li className="nav-link">Service</li>
          <li className="nav-link">About</li>
        </ul>
      </nav>


      <div className='header'>
        <div className='continer'>



          <img src={Logoname} alt="Logoname" className="logoname" />

          <div className='mot'>

            <p>
              Ignite your fire with FitFood. Unleash your potential, fuel your passion, and conquer your goals. Let's make healthy happen!
            </p>

          </div>

          <Link to="/signup">

            <button className='but'>Get Started now</button>

          </Link>


          <div className="socialmedia">

            <img src={fb} alt="facebook_profile"></img>


            <img src={twitter} alt="facebook_profile"></img>


            <img src={Linkedin} alt="facebook_profile"></img>


            <img src={Instgram} alt="facebook_profile"></img>

          </div>


          {/* <div className='wave'>

          </div> */}

        </div>

        <div> <img src={maslo} alt="maslo" className='maslo'></img> </div>
      </div>




      <section className='two'>

        <h1 >Service</h1>
        
        <div className='cards' >


          <div class="card "><img className=" photo" src={dietplanning} alt="dietplanning" />
            <p>Healthy recipes with calorie info</p>
          </div>

          <div class="card "><img className=" photo" src={bmi} alt="maslo" />
            <p>Calculate BMI, track your health</p>
          </div>

          <div class="card "><img className=" photo" src={nutritionist_4} alt="Frame" />
            <p>Estimate BMR, manage calorie intake</p>
          </div>
        </div>

      </section>
      <section className='three'>
        <h1> How it work</h1>

        <div className='kards'>
          
          <div class="kard ">
            <img className=" fotoo" src={healthylife} alt="Frame" />
         
          </div>
          <div class="kardp ">
            <p>The website helps users lead a healthier life by calculating BMI and BMR while providing a collection of healthy recipes. Users can calculate their BMI to understand their weight status and estimate their BMR to determine daily caloric needs. They can also explore and choose from a variety of nutritious recipes with detailed nutritional information. The website aims to empower users to make informed choices for improved health and wellness.</p>
          </div>
         
       
          </div>
        
      </section>


      <Footer />
    </>
  )
}

export default LandingPage;