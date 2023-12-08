import React from 'react'

import '../../App.css';

import obj from '../../Assets/Interview/objects.PNG';
import enumerable from '../../Assets/Interview/IenumerableIEnumerator.PNG';
import tuple from '../../Assets/Interview/tuple.PNG';
import struct from '../../Assets/Interview/struct.PNG';
import mvcFilters from '../../Assets/Interview/mvcFilters.png';
import outputCache from '../../Assets/Interview/outputCache.png';
import customActionFilter from '../../Assets/Interview/customActionFilter.png';

export default function DotNetInterview(){
    return (
        <div className='Interview'>
            <h3>What does rest stands for in restful api?</h3>
            <p>REST stands for <i>Representational State Transfer</i>. REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.</p>
            <hr/>
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
            <h3>Is Lazy loading good?</h3>
            <p>lazy loading is widely used in web applications to improve application performance. It helps developers reduce loading times, optimize data usage and improve the user experience. However, overusing lazy loading can affect the application performance negativel</p>
            <p><b>Disadvantages</b></p>
            <ul>
                <li>If you have a web application such as an online store, you need to allow users to scroll up down quickly and navigate.Using lazy loading for such applications can slow down the scrolling experience since we need to wait until the data loads. This will decrease the application performance and cause user experience issues.</li>
                <li>If you have not defined the image width and height properties for lazy loading images, noticeable delays can occur during the image rendering process. Since the resources are not downloading at the initial page load, the browser cannot know the content size to fit into the page layout</li>
            </ul>
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
            <hr/>
            <h3>Which is effective Tuple or keyvaluepair</h3>
            <p>Tuple was faster in every test than KeyValuePair except in allocation performance. Therefore, if your program does any work beyond allocating the collections, it is a better idea to use Tuple instead of KeyValuePair.</p>
            <p>The nanoseconds lost from allocating a Tuple could be quickly made up after a few function calls with a Tuple argument.</p>
            <img src={tuple} alt="tuple" />
            <p><b>Using structs</b> (such as KeyValuePair) is usually a bad idea. While structs are faster to allocate, they slow down many other important parts of your program. With structs, simple method calls suddenly become many times slower.</p>
            <hr/>
            <h3>Difference between Convert.ToString() and .ToString()</h3>
            <p>The basic difference between them is the Convert function handles NULLS while i.ToString () does not; it will throw a NULL reference exception error. So as good coding practice using convert is always safe.</p>
            <h3>Difference between Int16 and Int32 and Int64</h3>
            <p><b>Int16:(short)</b>This Struct is used to represents 16-bit signed integer. The Int16 can store both types of values including negative and positive between the ranges of <b>-32768 to +32767</b>.</p>
            <p><b>Int32:(int)</b>This Struct is used to represents 32-bit signed integer. The Int32 can store both types of values including negative and positive between the ranges of <b>-2147483648 to +2147483647.</b></p>
            <p><b>Int64:(long)</b>This Struct is used to represents 64-bit signed integer. The Int64 can store both types of values including negative and positive between the ranges of -9,223,372,036,854,775,808 to +9, 223,372,036,854,775,807</p>
            <hr/>
            <h3>Difference between class and struct</h3>
            <img src={struct} alt="struct" />
            <hr/>
            <h3>What are replay attacks?</h3>
            <p>A replay attack (also known as playback attack) is a form of network attack in which valid data transmission is maliciously or fraudulently repeated or delayed</p>
            <p>Suppose Alice wants to prove her identity to Bob. Bob requests her password as proof of identity, which Alice dutifully provides (possibly after some transformation like hashing (or even salting) the password); meanwhile, Eve is eavesdropping on the conversation and keeps the password (or the hash). After the interchange is over, Eve (acting as Alice) connects to Bob; when asked for proof of identity, Eve sends Alice's password (or hash) read from the last session which Bob accepts, thus granting Eve access.</p>
            <p><b>Countermeasures:</b>Replay attacks can be prevented by tagging each encrypted component with a session ID and a component number.</p>
            <hr/>
            <h3>What is antiforgery token?</h3>
            <hr/>
            <h3>Why we need delete put patch , when we can perform alll operation with httppost?</h3>
            <hr/>
            <h3>Filters in MVC</h3>
            <img src={mvcFilters} alt="mvcFilters" />
            <p>Types of action filters</p>
            <ul>
                <li><b>OutputCache</b></li>
                <img src={outputCache} alt="outputCache" />
                <li><b>Custom action filters</b>: You can create a custom action filter in two ways, first, by implementing the IActionFilter interface and the FilterAttribute class. Second, by deriving the ActionFilterAttribute abstract class.</li>
            </ul>
        </div>
    )
}