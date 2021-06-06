import React from 'react';

import '../../dotnetbasics.css';
import subject from '../../../../Assets/DotNetBasics/Weather.PNG';
import observer from '../../../../Assets/DotNetBasics/observer.PNG';
import main from '../../../../Assets/DotNetBasics/main.PNG';

export default function Observer(){
    return (
        <div className="DNBStyle">
            <h1>Observer Pattern</h1>
            <p>This can be used to create one to many relationship of objects. This relationship should be such that when one object changes then all the other connected objects are notified about that change and hence update themselves accordingly</p>
            <p>Below WeatherForecast is our subject i.e it will send message to all the observers . So it has 2 methods Attach and Notify( Notify is called everytime temperature is set</p>
            <p>NewsAgency is our Observer which is called by WeatherForecast everytime when temperature changes</p>
            <img src={subject} alt="Subject" style={{display:'inline'}}/>
            <img src={observer} alt="Subject" style={{display:'inline',width:'1100px',height:'500px',marginLeft:'5px'}}/>
            <p>Below is the main program which attaches all the observers with subsject</p>
            <img src={main} alt="main" />
            <p style={{color:'red'}}>This observer pattern is similar to subscriber consumer</p>
        </div>
    )
}