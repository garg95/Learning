import React from 'react'

import '../../App.css';

import obj from '../../Assets/Interview/objects.PNG';

export default function DotNetInterview(){
    return (
        <div className='Interview'>
            <h3>What security measures are to be considered in webapi and while logging in or while signing up?</h3>
            <hr/>
            <h3>Difference between TempData, ViewBag and ViewData?</h3>
            <a href="https://www.c-sharpcorner.com/blogs/viewbag-viewdata-and-tempdata-in-mvc">Explained</a>
            <hr/>
            <h3>Can we create a static variable inside a non static class?</h3>
            <p>Yes</p>
            <hr />
            <h3>What are solid principles?</h3>
            <p></p>
            <hr />
            <h3>Difference between Abstract class and Interface?</h3>
            <hr />
            <h3>What is boxing and unboxing?</h3>
            <hr />
            <h3>Difference between object,var and dynamic?</h3>
            <img src={obj} />
            <hr/>
            <h3>Can we have static constructor inside a static class?</h3>
            <p>No- because we cannot have access modifier inside static constructor</p>
            <hr />
            <h3>Can we have public constructor without static keyword in static class?</h3>
            <p>No - we cannot have that because static classes cannot have instance constructors</p>
        </div>
    )
}