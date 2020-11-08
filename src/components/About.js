
import React from 'react';
import '../App.css';
import { Button } from './ValuesButton';
import './About.css';
import AdrianPhoto from '../images/Adrian.png'

function AboutSection() {
  return (
    <div className='about-container'>

    <h1>About</h1>



    <div className='about-text-container'>
    <p><b>in-fintech.com</b> is passionate about Finance, Economics, Technology and Entrepreneurship - this website shares articles and projects in-fintech!</p>

    <br />
    <div className='about-adrian-container'>

    <br />
    <img src={AdrianPhoto} alt="Adrian" /> 
    <br />
    <h3>Adrian Hough, BCom, MBA</h3>

    <br />
    <p>Aussie-Brit who lives in London.  Finance, Risk and Change professional with experience working at Deutsche Bank, Centrica Energy, RBC Capital and Bank of America.  Successfully delivered projects across Commodities, Structured Finance, Derivatives, Fixed Income and Emerging Markets businesses.</p>
    <br />
    </div>
    </div>

    <div className='about-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      VALUES
      </Button>



    </div>
    </div>


  );
}

export default AboutSection;
