import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="menu" style={{ height: '10%'}}>
            <NavLink to='/' 
                className={``}
            >
               {"Home"}
            </NavLink>
            <NavLink to='/notes' 
                className={``}
            >
                {"Notes List"}
            </NavLink>
        </div>
    );
}