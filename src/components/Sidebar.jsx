import React from 'react';
import bgSidebar from '../images/bg-sidebar-desktop.svg';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar' style={{backgroundImage: `url(${bgSidebar})`}}>
        <ul className='sidebar-ul'>
            <li>
                <NavLink to = "/" className='sidebar-number'>
                    1
                </NavLink>
                <div className="sidebar-text">
                    <p className='light'>STEP 1</p>
                    <p className='bold'>YOUR INFO</p>
                </div>
            </li>
            <li>
                <NavLink to = "select-plan" className='sidebar-number'>
                    2
                </NavLink>
                <div className="sidebar-text">
                    <p className='light'>STEP 2</p>
                    <p className='bold'>SELECT PLAN</p>
                </div>
            </li>
            <li>
                <NavLink to = "add-ons" className='sidebar-number'>
                    3
                </NavLink>
                <div className="sidebar-text">
                    <p className='light'>STEP 3</p>
                    <p className='bold'>ADD-ONS</p>
                </div>
            </li>
            <li>
                <NavLink to = "finish-up" className='sidebar-number'>
                    4
                </NavLink>
                <div className="sidebar-text">
                    <p className='light'>STEP 4</p>
                    <p className='bold'>SUMMARY</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;
