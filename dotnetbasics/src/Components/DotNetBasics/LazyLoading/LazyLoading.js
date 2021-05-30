import React from 'react';


import '../dotnetbasics.css';
import lazy from '../../../Assets/DotNetBasics/lazy.PNG';
export default function lazyloading() {
    return (
        <div className='DNBStyle'>
            <h2>Role of Lazy loading is that object should load its other objects only when they are needed.</h2>
            <h2>To implement lazy loading</h2>
            <ul>
                <li>First we need to wrap our object with <b>Lazy</b> keyword </li>
                <li>Then from inside constructor (or anywhere), initialize that lazy object pointing towards function which should be called when that object is used for iteration or fetching values</li>
            </ul>
            <img src={lazy} />
            <h2>Advantages of lazy loading</h2>
            <ul>
                <li>It minimizes the startup time of your application</li>
                <li>Application consumes less memory because of on-demand loading</li>
                <li>Unnecessary database sql execution is avoided</li>
            </ul>
            <h2>Disadvantage</h2>
            <ul>
                <li>Disadvantage is that code becomes complicated. As we need to do checks if the loading is needed or not. So must be there is a slight decrease in performance.</li>
            </ul>

        </div >
    )
}