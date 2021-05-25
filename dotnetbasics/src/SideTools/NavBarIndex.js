import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBarIndex.css';

const NavBarIndex = (props) => {

    const creatingJSX = props.topics.map(key => {
        return <li key={key.Name}><NavLink to={key.Path}>{key.Name}</NavLink> </li>
    });

    return (
        <div className='NavBarIndex'>
            <ul>
                {creatingJSX}
            </ul>
        </div>
    );
}
export default NavBarIndex;
