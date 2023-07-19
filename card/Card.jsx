import React, { useState } from 'react';
import '../css/card.css';

const Card = () => {
  const [card, setCard] = useState('');
  const [card2, setCard2] = useState('');
  const [card3, setCard3] = useState('');
  const [card4, setCard4] = useState('');
  const [card5, setCard5] = useState('');


  const [error, setError] = useState('');

  const show1 = (num) => {
    const inputValue2 = num.target.value
    // document.getElementById('name').innerHTML = num.target.value;
    setCard2(inputValue2)
  };

  const show2 = (num) => {
    const inputValue = num.target.value;
    const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    const formattedValue = numericValue.replace(/(.{4})/g, '$1 '); // Add a space after every four characters
    const error = 'wrong format, numbers only'


    const number = /^[A-Za-z]+$/.test(formattedValue)
    
    if (formattedValue==number) {
      console.log('Invalid'); // Log 'Invalid' if non-numeric characters are found
      setError(error)
    } else if(formattedValue!=number && formattedValue.length <= 20){
      setCard(formattedValue); // Update the cardNumber state with the formatted value
      setError('')
      console.log('valid')
    }

    // setCard(space)
  }

  const show3 = (num) => {
    // document.getElementById('months').innerHTML = num.target.value;
    const inputValue3 = num.target.value
    if(inputValue3.length <= 2){
    setCard3(inputValue3)
    }else{
    }
  };
  const show4 = (num) => {
    // document.getElementById('years').innerHTML = num.target.value;
    const inputValue4 = num.target.value
    if(inputValue4.length <= 2){
    setCard4(inputValue4)
    }else{
    }
  };
  const show5 = (num) => {
    // document.getElementById('cvcs').innerHTML = num.target.value;
    const inputValue5 = num.target.value
    const stop = 0
    
    if(inputValue5.length <= 3){
    setCard5(inputValue5)
    }else{
      // setCard5(stop)
    document.getElementById('cvc').innerHTML = 9;

    }
    
  };

  return (
    <div className="main">
      <div id="sidebar">
        <div id="front">
        <button id='b'></button>
        <button id='b1'></button>
          <div id="num">{card || '0000 0000 0000 0000'}</div>
          <div id="name">{card2 || 'JANE APPLESEED'}</div>
          <div id="years">{card3 || '00'}</div>
          <div id="st">/</div>
          <div id="months">{card4 || '00'}</div>
        </div>
        <div id="back">
          <div id='cvcs'>{card5 || '000'}</div>
        </div>
      </div>
      <div id="content">
        <div id="names">
          <b3>CARDHOLDER NAME</b3>
          <p>
            <input
              placeholder="e.g. Jane Appleseed"
              onChange={show1}
              id="names"
            ></input>
          </p>
        </div>

        <div id="nums">
          <b3>CARD NUMBER</b3>
          <p>
            <input type='text' placeholder="e.g 1234 5678 9123 0000" onChange={show2} id="number">
            </input>
            <div id="err">{error}</div>
          </p>
        </div>

        <b3>EXP. DATE</b3>
        <div className="back">
          <p>
            <input placeholder="MM" onChange={show3} id="month"></input>
          </p>

          <b4>(MM/YY)</b4>
          <p>
            <input placeholder="YY" onChange={show4} id="year"></input>
          </p>

          <b4>CVC</b4>
          <p>
            <input placeholder="e.g. 123" onChange={show5} id="cvc"></input>
          </p>
        </div>

        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Card
