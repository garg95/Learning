import React from 'react'

import '../../App.css';

import obj from '../../Assets/Interview/objects.PNG';
import enumerable from '../../Assets/Interview/IenumerableIEnumerator.PNG';

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
            <img src={obj} alt=""/>
            <hr/>
            <h3>Can we have static constructor inside a static class?</h3>
            <p>No- because we cannot have access modifier inside static constructor</p>
            <hr />
            <h3>Can we have public constructor without static keyword in static class?</h3>
            <p>No - we cannot have that because static classes cannot have instance constructors</p>
            <hr/>
            <h3>How can we create a deadlock?</h3>
            <hr/>
            <h3>What's the use of Global.asax file?</h3>
            <p>Effectively, global.asax allows you to write code that runs in response to "system level" events, such as the application starting, a session ending, an application error occuring, without having to try and shoe-horn that code into each and every page of your site.</p>
            <p>Once you've added the file, you can add code under any of the events that are listed</p>
            <ul>
                <li>Application_Start</li>
                <li>Application_End</li>
                <li>Session_Start</li>
                <li>Session_End</li>
                <li>Application_BeginRequest</li>
                <li>Application_AuthenticateRequest</li>
                <li>Application_Error</li>
            </ul>
            <hr />
            <h3>Purpose of web.config files?</h3>
            <hr/>
            <h3> Structural patterns - Flyweight, Proxy, Facade, Bridge?</h3>
            <hr/>
            <h3> what are Covariance and contravariance in c#</h3>
            <p>Explained</p>
            <hr/>
            <h3>AssemblyDelaySignAttribute and AssemblyKeyFileAttribute</h3>
            <hr/>
            <h3>Difference between IEnumerable and IEnumerator</h3>
            <p>IEnumerable and IEnumerator both are interfaces in C#.</p>
            <ul>
                <li>IEnumerable is an interface defining a single method GetEnumerator() that returns an IEnumerator interface.</li>
                <li>IEnumerator has two methods MoveNext and Reset. It also has a property called Current</li>
            </ul>
            <img src={enumerable} alt="enumerable" />
            <hr/>
            <h3>What is formatter pattern</h3>
            <hr/>
            <h3>Difference between IEnumerable and IQueryable ?</h3>
            <table style={{width:'60%',border:'1px solid black'}}>
                <tr>
                    <th>IEnumerable</th>
                    <th>IQueryable</th>
                </tr>
                <tr>
                    <td>IEnumerable doesn’t support lazy loading</td>
                    <td>IQueryable support lazy loading</td>
                </tr>
                <tr>
                    <td>Querying data from a database, IEnumerable execute a select query on the server side, load data in-memory on a client-side and then filter data.</td>
                    <td>Querying data from a database, IQueryable execute the select query on the server side with all filters.</td>
                </tr>
            </table>
        </div>
    )
}