
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Contact.css';

function ContactSection() {
  return (
    <div className='contact-container'>
    <h1>Contact</h1>
    <br />
    <br />
      <div className='contact-text-container'>
      <p>Please provide feedback on projects and articles.  Also contact 'in-fintech.com' for project proposals.</p>

      <br />
      <br />
      <a class='social-icon-link email' href="mailto:adhough@hotmail.com" target="_top">
        <i class='fas fa-envelope' />
      </a>
      <p> :
      <a href="mailto:adhough@hotmail.com" target="_top">  adhough@hotmail.com </a></p>
      <br />
      <br />
      <a
        class='social-icon-link linkedin'
        href="https://www.linkedin.com/in/adrian-hough-528b7b" target="_blank" rel="noreferrer">

        <i class='fab fa-linkedin' />
      </a><p> : <a href="https://www.linkedin.com/in/adrian-hough-528b7b" target="_blank" rel="noreferrer">www.linkedin.com/in/adrian-hough-528b7b</a></p>
      <br />
      <br />
      <a
        class='social-icon-link twitter'
        href="https://twitter.com/@adhough_London"
        target="_blank"
        rel="noreferrer"
      >
        <i class='fab fa-twitter' />
        </a><p> :    <a href="https://twitter.com/@adhough_London"
        target="_blank" rel="noreferrer">@adhough_London</a>
      </p>
      <br />

    </div>
    <br />
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      ABOUT
      </Button>
    </div>
  );
}

export default ContactSection;
