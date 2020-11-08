
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './AvgLibor.css';

function AvgLiborSection() {
  return (
    <div className='avglibor-container'>
    <h1>Average Libor Estimator</h1>
      <div className='avglibor-project-container'>


<h3>(First released March 2020)</h3>

<br />
<img src='../images/Libor.jpeg'/>
<br />
<p>This website allows user to select a start and end date to estimate Average One Month US Libor and Cost of Carry.  This website was developed using Python, Django, PostgreSQL and launched using Heroku.
</p>
<br />
<a href="https://avglibor.herokuapp.com/estimator/" target="_blank" rel="noreferrer">https://avglibor.herokuapp.com/estimator/</a>
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

export default AvgLiborSection;
