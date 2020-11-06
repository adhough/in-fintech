
import React from 'react';
import '../App.css';
import { Button } from './ProjectsButton';
import './FXRisk.css';

function FXRiskSection() {
  return (
    <div className='fxrisk-container'>
    <h1>FX Risk Model</h1>
      <div className='fxrisk-project-container'>


<h3>(First released September 2020)</h3>
<br />
<img src='images/FXModel.jpeg'/>
<br />
<p>This website calculates the one day Value at Risk (VaR) for a portfolio of assets held in currencies such as Australian Dollars (AUD), Canadian Dollars (CAD), Swiss Francs (CHF), Euros (EUR), Japanese Yen (JPY), New Zealand Dollars (NZD) and US Dollars (USD). This VaR model estimates the most that a portfolio can lose in one day, due to changes in FX rates given either 95% or 99% confidence intervals . This model is measuring the FX risk and not other risk factors such as equity, interest or credit risk. Valuations are in British Pound (GBP).  This website was developed using Python, Flask, Numpy, Pandas and deployed using Heroku.
</p>
<br />
<a href="https://fxriskmodel.herokuapp.com/" target="_blank">https://fxriskmodel.herokuapp.com/</a>
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

export default FXRiskSection;
