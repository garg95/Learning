import React, { useEffect } from 'react';

import '../dotnetbasics.css';
import conpar from '../../../Assets/DotNetBasics/conpar.PNG';

export default function Asyncvsawait() {
    useEffect(()=>{
         var nodeList=document.getElementsByTagName('img');
         var array=Array.prototype.slice.call(nodeList);
         array.map(key=>key.setAttribute("alt","hello"));
    },[]);
    return (
        <div className='DNBStyle'>
            <h2>Lets first understand Concurrency vs Parallelism ?</h2>
            <ul>
                <li>Concurrency and parallelism as per many people are same thing i.e they does work parallely.</li>
                <li><b>Concurrency</b> It means executing multiple tasks on same core</li>
                <li><b>Parallelism</b> It means executing multiple tasks on multiple coresor multiple machines</li>
            </ul>
            <img src={conpar} style={{height:'400px'}} alt=""/>
            <ul>
                <li>By looking at the image above we can say that concurrency is a feel of parallelism and parallelism is a real parallelism</li>
                <li>In concurrency we have time slicing i.e sometime is given to t1 and sometime it is given to t2 or we can say we have context switches</li>
                <li>In parallelism we dont have context switches</li>
                <li>So if we have cores available it is better to use parallelism because it utilizes the core and executes multiple work at the same time</li>
                <li>Concurrency ensures usability and non blocking code i.e your application should not hang. Here performance is not in the picture</li>
                <li>We can achieve concurrency by making use of <b>async</b> keyword.</li>
                <li>We have to use <b>await</b> keyword with async method. If we dont use await in async method then it will run in synchronous manner. Also if we dont use await it will not wait for the operation to finish.</li>
                <li><b>async</b>- It can have either void or Task&lt;T&gt; as a return type</li>
                <li>Use concurrency when your 2 methods have to communicate with each other where as use parallelism where your 2 methods just have to do their independent work.</li>
                <li>Concurrency is undetermestic i.e any method can complete work first</li>
            </ul>
        </div >
    )
}