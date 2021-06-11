import React from 'react';

import del from '../../../Assets/DotNetBasics/delegate.PNG';
export default function DelegatesAndEvents(){
    return(
        <div className='DNBStyle'>
            <h2>Delegates</h2>
            <ul>
                <li>Deleagtes are pointer to functions(this is right but its quite confusing)</li>
                <li>Delegates are most importantly used for callbacks</li>
                <li>Delegates are mostly used when we have thread scenario or events</li>
                <li>Delegates are used in places where we want our logic 2 to keep informing logic 1 that particular task has been completed.So these two logics are running asynchronously and  communicating with each other</li>
            </ul>
            <img src={del} alt=""/>
            <p>Now why do we need events?</p>
            <p>There is one problem of naked delegates i.e from sender end delegate is public and from receiver end someone can set delegate to null. So if this happens all the other receivers will not recieve messages from sender. So we will get exception of object reference cannot be set to null</p>
            <p>So event is an encapsulation over a delegate</p>
            <p>When we made use of event , it totally becomes publisher subscriber mechanism where publisher can send messages to subscribers but subscriber cannot touch publisher</p>
            <h3>Real life scenario</h3>
        </div>
    )
}