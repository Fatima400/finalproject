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
import Footer from './Footer';



const LandingPage = () => {
  return (
    <>

      <nav className="nav">
        <div className="nav-logo">
          <img src={Logo} alt="Logo" className="logoname" />
        </div>
        <ul className="nav-links">
          <li className="nav-link" id="howitwork">How it work</li>
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

        <h1>How it work</h1>
        <div className='cards'>


          < div class="card ">



            <img className=" photo" src={dietplanning} alt="dietplanning" />
            <p>wpeogegmkjtnbhtr</p>
          </div>

          <div class="card "><img className=" photo" src={maslo} alt="maslo" />
            <p>wpeogegmkjtnbhtr</p>
          </div>

          <div class="card "><img className=" photo" src={Frame} alt="Frame" />
            <p>wpeogegmkjtnbhtr</p>
          </div>
        </div>

      </section>
      <section className='three'>
        <h1> Service</h1>

        <div className='kards'>
          <div class="kard ">
            <img className=" foto" src={Frame} alt="Frame" />
            <p>uzrkueujk76kl897</p>
          </div>
          <div class="kard ">
            <img className=" foto" src={Frame} alt="Frame" />
            <p>dcfdrgregvtewghr6</p>
          </div>
          <div class="kard ">
            <img className=" foto" src={Frame} alt="Frame" />
            <p>uzju6ki7tzukjtrz</p>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default LandingPage;