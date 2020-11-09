
import React from 'react';
import '../App.css';
import { Button } from './ContactButton';
import './Articles.css';
import CardItem from './CardItem';
import Presentation from '../images/Presentation.jpg'
import London from '../images/London.jpg'
import FXMarket from '../images/FXMarket.jpeg'
import Ethics from '../images/Ethics.jpeg'

function ArticleSection() {
  return (
    <div className='cards'>

      <div className='article-container'>
      <h1>Articles</h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Presentation}
              text='Breaking into Fintech'
              path='/fintech'
            />
            <CardItem
              src={London}
              text='What is Open Banking?'
              path='/openbanking'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src={FXMarket}
              text='Foreign Exchange: Background and Opportunities'
              path='/fxmarket'
            />
            <CardItem
              src={Ethics}
              text='Values and Ethics in Fintech'
              path='/ethics'
            />

          </ul>
        </div>
        <div className='project-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT
          </Button>

          </div>
      </div>
    </div>
  );
}


export default ArticleSection;
