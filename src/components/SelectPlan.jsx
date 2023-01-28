import React, {useState} from 'react';
import MonthlyPlan from './MonthlyPlan';
import YearyPlan from './YearlyPlan';
import { Link } from 'react-router-dom';


function SelectPlan() {
  const [toggle, setToggle] = useState(true);
  const changeDuration = () => {
    let toggleBtn = document.querySelector('.toggle');
    if (toggleBtn.classList.contains('active')) {
      toggleBtn.classList.remove('active');
      setToggle(true)
    }
    else {
      toggleBtn.classList.add('active');
      setToggle(false);
    }
  }

  return (
    <section className = "select-plan">
      <h1>Select your plan</h1>
      <p className='first-p light'>
        You have the options of monthly or yearly billing.
      </p>
      {toggle === true ? <MonthlyPlan /> : <YearyPlan /> }
      <div className='duration'>
        <p className={toggle === true ? "bold" : "light"}>Monthly</p>
        <div className='toggle' onClick={changeDuration}>
          <div className="btn"></div>
        </div>
        <p className = {toggle === true ? "light" : "bold"}>Yearly</p>
      </div>
      <div className='button-container'>
        <h2><Link to ="/">Go Back</Link></h2>
        <Link to ='/add-ons'><button type='button'>Next Step</button></Link>
      </div>
    </section>
  )
}

export default SelectPlan;
