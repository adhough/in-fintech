
import React from 'react';
import '../App.css';
import './Projects.css';
import CardItem from './CardItem';
import { Button } from './ArticlesButton';
import Agile from '../images/Agile.jpeg'
import Libor from '../images/Libor.jpeg'
import SecModel from '../images/SecModel.jpeg'
import FXModel from '../images/FXModel.jpeg'

function ProjectSection() {
  return (
  <div className='cards'>
  <div className='project-container'>
  <h1>Projects</h1>
  <div className='cards__wrapper'>
    <ul className='cards__items'>
      <CardItem
        src={Agile}
        text='Agile Project Tracker'
        path='/agile'
      />
      <CardItem
        src={Libor}
        text='Average Libor Estimator'
        path='/avglibor'
      />
      </ul>
      <ul className='cards__items'>
      <CardItem
        src={SecModel}
        text='Securitisation Model'
        path='/secmodel'
      />
      <CardItem
        src={FXModel}
        text='FX Risk Model'
        path='/fxrisk'
      />

    </ul>
  </div>
  <div className='project-btns'>
  <Button
    className='btns'
    buttonStyle='btn--outline'
    buttonSize='btn--large'
  >
    ARTICLES
    </Button>

    </div>
  </div>

  </div>

);
}
export default ProjectSection;
