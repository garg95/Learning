import React from 'react';

import middleware1 from '../../../Assets/DotNetBasics/middleware1.PNG';
import middleware2 from '../../../Assets/DotNetBasics/middleware2.PNG';

export default function Middleware(){
    return (
        <div className='DNBStyle'>
            <p>Middleware is software that's assembled into an app pipeline to handle requests and responses. Each component:</p>
            <ul>
                <li>Chooses whether to pass the request to the next component in the pipeline.</li>
                <li>Can perform work before and after the next component in the pipeline.</li>
            </ul>
            <p>Request delegates are used to build the request pipeline. The request delegates handle each HTTP request.</p>
            <p> An individual request delegate can be specified in-line as an anonymous method (called in-line middleware), or it can be defined in a reusable class. These reusable classes and in-line anonymous methods are middleware, also called <b>middleware components</b>. Each middleware component in the request pipeline is responsible for invoking the next component in the pipeline or short-circuiting the pipeline. When a middleware short-circuits, it's called a <b>terminal middleware </b>because it prevents further middleware from processing the request.</p>
            <p>Each delegate can perform operations before and after the next delegate. Exception-handling delegates should be called early in the pipeline, so they can catch exceptions that occur in later stages of the pipeline.</p>
            <p>Run delegates don't receive a next parameter. The first Run delegate is always terminal and terminates the pipeline. Run is a convention. Some middleware components may expose Run[Middleware] methods that run at the end of the pipeline:</p>
            <img src={middleware1} alt="" />
            <p>The following diagram shows the complete request processing pipeline for ASP.NET Core MVC and Razor Pages apps. You can see how, in a typical app, existing middlewares are ordered and where custom middlewares are added. </p>
            <img src={middleware2} alt="" />
            <p>The order is critical for security, performance, and functionality.</p>
        </div>
    )
}