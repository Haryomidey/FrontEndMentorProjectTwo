import React from 'react';
import { Link } from 'react-router-dom';

function FinishUp() {
  return (
    <section className='finish-up'>
      <h1>Finishing Up</h1>
          <p className='first-p'>Double-check everything looks OK before confirming.</p>
          <div className='section-inner'>
            <div className='section-1'>
                <div className='arcade'>
                  <p className='bold'>Arcade(Monthly)</p>
                  <p className='link'><a href="#home">Change</a></p>
                </div>
                <p className='bold'>$9/mo</p>
            </div>
            <div className='section-2'>
                <div className='first-section'>
                    <p className='light'>Online</p>
                    <p className='bold'>$1/mo</p>
                </div>
                <div className='second-section'>
                    <p className='light'>Larger service</p>
                    <p className='bold'>$2/mo</p>
                </div>
            </div>
          </div>
          <div className='total'>
            <p className='light'>Total(per month)</p>
            <p className='bold'>+$12/mo</p>
          </div>
          <div className='button-container'>
            <h2><Link to ='/add-ons'>Go Back</Link></h2>
            <Link to = "/summary"><button>Confirm</button></Link>
          </div>
    </section>
  )
}

export default FinishUp;
