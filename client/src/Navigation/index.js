import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="menu" style={{ height: '10%' }}>
            <NavLink to='/'
                className="menu-home-button"
            >
                <span className="menu-home-button">Home</span>
            </NavLink>
            <NavLink to='/notes'
                className="noteslist-button"
            >
                <span className="noteslist-button">Notes List</span>
            </NavLink>
        </div>
    );
}