import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './TopBarIndex.css';


export default function SideBarIndex(props){
    const creatingJSX=props.topics.map(key=>{
        return <li key={key.Name}><NavLink to={key.Path}>{key.Name}</NavLink></li>
    });
    return(
        <div className='TopBarIndex'>
            <ul>
                {creatingJSX}
            </ul>   
        </div>
    );
}