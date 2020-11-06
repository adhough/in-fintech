import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './Values.css';

function ValuesSection() {
  return (
    <div className='values-container'>
    <h1>Values</h1>
    <div className='values-text-container'>

    <br />
    <img src="/images/Image4.jpeg" alt="forest"></img>
    <br />

    <br />
    <p><b>Innovation</b> : Passion for developing solutions which can improve businesses and lives.  </p>
    <br />
    <p><b>Simplicity</b> : Search for the most simple solutions to help improve understanding and reduce risk.  </p>
    <br />
    <p><b>Ethics</b> : Approach business with high ethical principles and actively engage in discussions about Ethics within the Fintech community.  </p>
    <br />
    <p><b>Methodical Action</b> : Take methodical and action oriented approaches to projects.  </p>
    <br />
    <p><b>Openness to Ideas</b> : Welcome honest exchanges and be open to different persepectives and new ideas.  </p>
    <br />
    <p><b>First Principles</b> : Question and challenge assumptions, break down problems to essential elements and develop 'bottom-up' perspectives.  </p>
    <br />
    </div>

    <div className='values-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline'
      buttonSize='btn--large'
    >
      PROJECTS
      </Button>

      </div>
        </div>

  );
}

export default ValuesSection;
