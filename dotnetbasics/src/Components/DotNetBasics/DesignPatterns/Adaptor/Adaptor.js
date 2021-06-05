import React from 'react';
import ad from '../../../../Assets/DotNetBasics/adapter1.PNG';
import ad1 from '../../../../Assets/DotNetBasics/adapter2.PNG';
import ad2 from '../../../../Assets/DotNetBasics/adapter3.PNG';

export default function Adapter(){
    return (
        <div style={{width:'80%'}}>
            <h1>Adapter design pattern (Structural pattern)</h1>
            <p>Adapter design pattern allows incompatible classes to interact with each other by converting the interface of one class into an interface expected by clients</p>
            <p>Leveraging on adaptor pattern improves reusability of code.</p>
            <p>Adapter pattern acts as a bridge between 2 incompatible interfaces</p>
            <p style={{fontSize:'25px',fontWeight:'bold'}}>Now when should we use adapter design pattern</p>
            <p>When we have to reuse a class which does not have an interface and need to work through a separate adapter that adapts interface of an existing class without changing it</p>
            <p>Also we can choose this pattern when client dont know whether they work with a target class directly or through another alternative that does not have the target interface.</p>
            <p>Eg -&gt; AC adapter</p>
            <img src={ad} alt="" style={{height:'200px'}}/>
            <p>In the above image adaptee class contains main functionality that client is expecting.</p>
            <p>Basically lets say we have a class which has method that returns xml data and now client wants data in JSON format.</p>
            <p>So to implement this :</p>
            <ul>
                <li>Make method virtual of that XML method</li>
                <img src={ad2} alt="" />
                <li>Creater another class(this class will be the adapter class) and inherit the class which return XML data and also inherit the interface </li>
                <li>Now override the method and return the data in json format</li>
                <img src={ad1} alt="" />
            </ul>
        </div>
    )
}