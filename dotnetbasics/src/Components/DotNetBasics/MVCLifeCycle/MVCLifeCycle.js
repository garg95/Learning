import React from 'react';


import mvclife from '../../../Assets/DotNetBasics/mvclife.PNG';
import life1 from '../../../Assets/DotNetBasics/life1.PNG';
import life2 from '../../../Assets/DotNetBasics/life2.PNG';
import life3 from '../../../Assets/DotNetBasics/life3.PNG';
export default function Mvclifecycle(){
    return (
        <div className='DNBStyle'>
            <h1>MVC Life Cycle</h1>
            <p>MVC has two life cycles −</p>
            <ol>
                <li>The application life cycle</li>
                <li>The request life cycle</li>
            </ol>
            <h3>The application life cycle</h3>
            <p>The application life cycle refers to the time at which the application process actually begins running IIS until the time it stops. This is marked by the application start and end events in the startup file of your application.</p>
            <h3>The Request Life Cycle</h3>
            <img src={mvclife} alt="" />
            <p><b>Routing:</b> Asp.net Routing is the first step in MVC request cycle. Basically it is a <b>pattern matching system </b>that matches the request’s URL against the registered URL patterns in the Route Table. When a matching pattern found in the Route Table, the Routing engine forwards the request to the corresponding IRouteHandler for that request. The default one calls the MvcHandler. The routing engine returns a 404 HTTP status code against that request if the patterns is not found in the Route Table.</p>
            <p>When application starts at first time, it registers one or more patterns to the Route Table to tell the routing system what to do with any requests that match these patterns. An application has only one Route Table and this is setup in the Global.asax file of the application.</p>
            <img src={life1} alt="" />
            <p><b>MvcHandler:</b> The MvcHandler is responsible for initiating the real processing inside ASP.NET MVC. MVC handler implements IHttpHandler interface and further process the request by using ProcessRequest method as shown below:</p>
            <img src={life2} alt="" />
            <p><b>Controller:</b> As shown in above code, MvcHandler uses the IControllerFactory instance and tries to get a IController instance. If successful, the Execute method is called. The IControllerFactory could be the default controller factory or a custom factory initialized at the Application_Start event, as shown below:</p>
            <img src={life3} alt="" />
            <p><b>Action Execution:</b>Once the controller has been instantiated, Controller's ActionInvoker determines which specific action to invoke on the controller. Action to be execute is chosen based on attributes ActionNameSelectorAttribute (by default method which have the same name as the action is chosen) and ActionMethodSelectorAttribute(If more than one method found, the correct one is chosen with the help of this attribute).</p>
            <p><b>View Result:</b>The action method receives user input, prepares the appropriate response data, and then executes the result by returning a result type. The result type can be ViewResult, RedirectToRouteResult, RedirectResult, ContentResult, JsonResult, FileResult, and EmptyResult.</p>
        </div>
    )
}