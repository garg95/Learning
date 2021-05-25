import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './SideBarIndex.css';


export default function SideBarIndex(props){
    const creatingJSX=props.topics.map(key=>{
        return <li key={key.Name}><NavLink to={key.Path}>{key.Name}</NavLink></li>
    });
    return(
        <div className='SideBarIndex'>
            <ul>
                {creatingJSX}
            </ul>   
        </div>
    );
}