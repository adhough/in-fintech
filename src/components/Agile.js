
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './Agile.css';

function AgileSection() {
  return (
    <div className='agile-container'>
    <h1>Agile Project Tracker</h1>
      <div className='agile-project-container'>


<h3>(First released March 2020)</h3>

<br />
<img src='../images/Agile.jpeg'/>
<br />
<p>This website is designed to be an easy way to store and manage project Epics and Stories - enter username ‘demo_user’ and password ‘read_only’ to view.  Developed using Python, Django, PostgreSQL and launched using Heroku.
</p>
<br />
<a href="https://agile-project-tracker.herokuapp.com/tracker/" target="_blank" rel="noreferrer">https://agile-project-tracker.herokuapp.com/tracker/</a>

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

export default AgileSection;
