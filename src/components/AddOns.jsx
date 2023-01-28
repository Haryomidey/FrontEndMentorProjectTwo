import React from 'react';
import { Link } from 'react-router-dom';

function AddOns() {
  const handleClick = () => {
    document.querySelector('.box-3').classList.toggle('active')
  }
  return (
    <section className='add-ons'>
      <h1>Pick add-ons</h1>
      <p className='first-p'>Add-ons help enchance your gaming experience.</p>

      <div className='add-on-box-wrapper'>
        <div className='add-on-box active'>
          <div className='section-one'>
            <input type ="checkbox" checked />
            <div className="light-bold">
              <p className="bold">Online service</p>
              <p className="light">Access to multiplayer games</p>
            </div>
          </div>
          <div className='section-two'>+$1/mo</div>
        </div>
        <div className='add-on-box active'>
          <div className='section-one'>
            <input type ="checkbox" checked/>
            <div className="light-bold">
              <p className="bold">Larger storage</p>
              <p className="light">Extra 1TB cloud save</p>
            </div>
          </div>
          <div className='section-two'>+$2/mo</div>
        </div>
        <div className='add-on-box box-3' onClick={handleClick}>
          <div className='section-one'>
            <input type ="checkbox" />
            <div className="light-bold">
              <p className="bold">Customizable profile</p>
              <p className="light">Custom theme on your profile</p>
            </div>
          </div>
          <div className='section-two'>+$2/mo</div>
        </div>
      </div>
      <div className="button-container">
        <h2><Link to ='/select-plan'>Go Back</Link></h2>
        <Link to ="/finish-up"><button type ="button">Next Step</button></Link>
      </div>
    </section>
  )
}

export default AddOns;