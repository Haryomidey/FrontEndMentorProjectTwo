import React from 'react';
import { useNavigate } from 'react-router-dom';

function YourInfo() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
      if (input.value === "") {
        input.classList.add('active');
        input.parentElement.firstElementChild.lastChild.classList.add('active');
        return false;
      }
      else if(input.value) {
        input.classList.remove('active');
        input.parentElement.firstElementChild.lastChild.classList.remove('active');
        navigate('/select-plan');
      }
    })
  }

  return (
    <section className='info-container'>
      <h1>Personal info</h1>  
      <p className='first-p'>Please provide your name, email address, and phone number.</p>
      <form onSubmit={handleSubmit}>
        <div className="name-container inputs">
          <div className='label-and-message'>
            <label for="name">Name</label>
            <p className='err-message'>This field is required</p>
          </div>
          <input type='text' placeholder='e.g. Oladiipo Ayomide' name='name' />
        </div>
        <div className="email-container inputs">
          <div className='label-and-message'>
            <label for="email">Email Address</label>
            <p className='err-message'>This field is required</p>
          </div>
          <input type='email' placeholder='e.g. oladiipoayomide2021@gmail.com' name='email' />
        </div>
        <div className="phone-num-container inputs">
          <div className='label-and-message'>
            <label for="tel">Phone Number</label>
            <p className='err-message'>This field is required</p>
          </div>
          <input type='tel' placeholder='e.g. +1 234 567 890' name='phone' />
        </div>
        <div className='button-container'><button type='submit'>Next Step</button></div>
      </form>
    </section>
  )
}

export default YourInfo;
