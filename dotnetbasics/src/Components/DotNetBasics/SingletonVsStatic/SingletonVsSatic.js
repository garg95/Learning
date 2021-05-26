import React from 'react';


import '../dotnetbasics.css';
import nullLock from '../../../Assets/DotNetBasics/nullLock.PNG';
import singleton from '../../../Assets/DotNetBasics/singleton.PNG';
export default function SingleVsStatic() {
    return (
        <div className='DNBStyle'>
            <h2>Singleton</h2>
            <p>Software design pattern that restricts the initiation of a class to one "single" instance</p>
            <ul>
                <li>Singleton = Static (it helps make object global) + Thread safe + safe iteration +encapsulate+ lazyloading.......</li>
                <li>Thread safe means if 2 threads are accessing static object it should be safe.</li>
                <li>safe iteration means someone cannot add his/her own data in your static object.That is u will not get option to add use IE  numerable instead of list</li>
                <li>encapsulation- so that someone cannot set your static object to null</li>
                <li>Singleton objects can be passed to methods, while static class as it does not have instance can't be passed as parameters.</li>
                <li>We cannot have null object inside a <b>lock</b></li>
            </ul>
            <img src={nullLock} />
            <h2>Singleton class structure </h2>
            <img src={singleton} />
        </div >
    )
}