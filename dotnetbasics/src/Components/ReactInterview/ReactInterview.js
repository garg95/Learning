import React from 'react';
import '../../App.css';
import  './ReactInterview.css';
import equalto from '../../Assets/Interview/equalto.PNG';
import reference from '../../Assets/Interview/reference.PNG';
import iife from '../../Assets/Interview/IIFE.PNG';
import hof from '../../Assets/Interview/HOF.PNG';
import call from '../../Assets/Interview/call.PNG';
import call1 from '../../Assets/Interview/call1.PNG';
import apply from '../../Assets/Interview/apply.PNG';
import bind from '../../Assets/Interview/bind.PNG';
import currying1 from '../../Assets/Interview/currying.PNG';
import closure from '../../Assets/Interview/closure.PNG';
import memoization from '../../Assets/Interview/memoization.PNG';
import regc from '../../Assets/Interview/regc.PNG';
import arrowc from '../../Assets/Interview/arrowc.PNG';
import destructure from '../../Assets/Interview/destructure.PNG';
import superPrp from '../../Assets/Interview/super-props.PNG';
import superPrp1 from '../../Assets/Interview/super-props1.PNG';
import eventloop from '../../Assets/Interview/eventloop.png';
import this1 from '../../Assets/Interview/this.png';
import this2 from '../../Assets/Interview/this1.png';
import this3 from '../../Assets/Interview/this2.png';
import arrowdiff from '../../Assets/Interview/arrowDiff.png';
import restOperator from '../../Assets/Interview/restOperator.png';
import spreadOperator from '../../Assets/Interview/spreadOperator.png';
import localStorage from '../../Assets/Interview/localStorage.png';
import sessionStorage from '../../Assets/Interview/sessionStorage.png';
import differencelocalStoragesessioncookie from '../../Assets/Interview/differencelocalStoragesessioncookie.png';
import browserVersion from '../../Assets/Interview/browserVersion.png';
import tabletType from '../../Assets/Interview/tabletType.png';
import tabletType1 from '../../Assets/Interview/tabletType1.png';
import foreachLoop from '../../Assets/Interview/foreachLoop.png';
export default function ReactInterview(){
    function currying(fn){
        return function(a,c){
          return function(b){
            return fn(a,b);
          }
        }
      }
      function multiply(a,b,c){
        return a*b*c;
      }
      var curryinmultiply=currying(multiply);
      console.log(curryinmultiply(3,4)(5));
    return (
        <div className="RI">
            <h3>Difference between class component and functional component?</h3>
            <hr />
            <h3>What are the different data types present in javascript?</h3>
            <p><b>Primitive Types:</b></p>
            <ul>
                <li>String</li>
                <li>Number</li>
                <li>BigInt</li>
                <li>Boolean</li>
                <li>Undefined : typeof undefined returns undefined</li>
                <li>Null : typeof null return object</li>
                <li>Symbol</li>
            </ul>
            <p><b>Non Primitive Types:</b></p>
            <ul>
                <li>Object </li>
            </ul>
            <hr/>
            <h3>Explain Hoisting in javascript.</h3>
            <p>only var is hoisted not let and const</p>
            <hr/>
            <h3>Difference between “ == “ and “ === “ operators.</h3>
            <p>Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.</p>
            <img src={equalto} alt="" />
            <hr/>
            <h3>Is javascript a statically typed or a dynamically typed language?</h3>
            <p>JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to statically typed language, where the type of a variable is checked during compile-time</p>
            <hr/>
            <h3>Explain passed by value and passed by reference.</h3>
            <p>non-primitive data types are always passed by reference. primitve types are passed by value</p>
            <img src={reference} alt="" />
            <hr/>
            <h3>What is an Immediately Invoked Function in JavaScript?</h3>
            <p>An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.</p>
            <img src={iife} alt="" />
            <p>While executing javascript code, whenever the compiler sees the word “function”, it assumes that we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, the compiler throws an error because it thinks we are declaring a function, and by the syntax of declaring a function, a function should always have a name</p>
            <hr/>
            <h3>Explain Higher Order Functions in javascript.</h3>
            <p>Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.</p>
            <img src={hof} alt="" />
            <hr/>
            <h3>Explain call(), apply() and, bind() methods.</h3>
            <p><b>Call</b></p>
            <img src={call} alt="" />
            <img src={call1} alt="" />
            <p><b>Apply :</b> .apply is similar to .call, only difference is that call() method takes arguments separately whereas, apply() method takes arguments as an array.</p>
            <img src={apply} alt="" />
            <p><b>Bind</b> This method returns a new function, where the value of “this” skeyword will be bound to the owner object, which is provided as a parameter.</p>
            <img src={bind} alt="" />
            <hr/>
            <h3>What is currying in JavaScript?</h3>
            <p>Currying is an advanced technique to transform a function of arguments n, to n functions of one or less arguments.</p>
            <p>By using the currying technique, we do not change the functionality of a function, we just change the way it is invoked.</p>
            <img src={currying1} alt="" />
            <hr/>
            <h3>Explain Closures in JavaScript.</h3>
            <p>Closures is an ability of a function to remember the variables and functions that are declared in its outer scope.</p>
            <img src={closure} alt="" />
            <hr/>
            <h3>What are object prototypes?</h3>
            <p>All javascript objects inherit properties from a prototype.</p>
            <p>Foreg : Date objects inherit properties from the Date prototype, Math objects inherit properties from the Math prototype,Array objects inherit properties from the Array prototype.On top of the chain is Object.prototype. Every prototype inherits properties and methods from the Object.prototype</p>
            <p>A prototype is a blueprint of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object</p>
            <p>obj1.push(2) is an example</p>
            <hr/>
            <h3>What is memoization?</h3>
            <p>Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.</p>
            <img src={memoization} alt="" />
            <hr/>
            <h3>Explain "this" keyword</h3>
            <p>The "this" keyword refers to the object that the function is a property of</p>
            <p>The value of "this" keyword will always depend on the object that is invoking the function</p>
            <p>Lets consider below examples via screenshot. What will be the output</p>
            <img src={this1} alt=""/>
            <p>Since the line which is invoking the function is declared in a global context and here global context is our browser window. So output will be <b>window object</b></p>
            <p>Lets see another example</p>
            <img src={this2} alt=""/>
            <p>The ouput will be <b>Vivek</b>. Because the getName function is a property of the object obj , therefore, this keyword will refer to the object obj, and hence the output will be “vivek”.</p>
            <p>Lets see another example.</p>
            <img src={this3} alt=""/>
            <p>The output will be “akshay”.</p>
            <p>Although the getName function is declared inside the object obj, at the time of invocation, getName() is a property of obj2, therefore the “this” keyword will refer to obj2.</p>
            <p>The silly way to understand the “this” keyword is, whenever the function is invoked, check the object before the dot. The value of this . keyword will always be the object before the dot.</p>
            <hr/>
            <h3>Difference between arrow function and regular function</h3>
            <p>Biggest difference is the handling of <b>this</b> keyword</p>
            <img src={arrowdiff} alt=""/>
            <p> By general definition, this keyword always refers to the object that is calling the function. As you can see in the code above, obj1.valueOfThis() returns obj1 since this keyword refers to the object calling the function.</p>
            <p>In the arrow functions, there is no binding of this keyword. This keyword inside an arrow function does not refer to the object calling it. It rather inherits its value from the parent scope which is the window object in this case. Therefore, in the code above, obj2.valueOfThis() returns the window object.</p>
            <p style={{fontSize:'30px'}}><b>Constructors</b></p>
            <p>Regular function</p>
            <img src={regc} alt="" />
            <p>Arrow function</p>
            <img src={arrowc} alt="" />
            <p style={{fontSize:'30px'}}><b>Implicit Return</b></p>
            <p style={{fontSize:'30px'}}><b>Methods</b></p>
            <a href="https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/">Check here</a>
            <hr/>
            <h3>What is the rest and spread operator?</h3>
            <p><b>Rest parameter:</b></p>
            <p>Helps in extracting all or some parts of the arguments</p>
            <p>Any number of arguments will be converted into an array using the rest operator</p>
            <p>Rest paramter should always be used at the end of the parameter list</p>
            <img src={restOperator} alt=""/>

            <p>Although the syntax of the spread operator is exactly the same as the rest parameter, the spread operator is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.</p>
            <img src={spreadOperator} alt=""/>








            <hr/>
            <h3>What is Object Destructuring?</h3>
            <img src={destructure} alt="" />
            <hr/>
            <h3>Why we use super(props) in constructor?</h3>
            <img src={superPrp} alt="" />
            <h3>Can we use super() instead of super(props)?</h3>
            <p>So even if you forget to pass props to super(), React would still set them right afterwards. There is a reason for that.</p>
            <p>React would later assign this.props after your constructor has run. But this.props would still be undefined between the super call and the end of your constructor:</p>
            <img src={superPrp1} alt="" />
            <hr/>
            <h3>What is the difference between promise and observable?</h3>
            <p><b>Promise :</b> A Promise handles a single event when an async operation completes or fails.</p>
            <p>Promise object has four states</p>
            <ul>
              <li>Pending</li>
              <li>Fulfilled</li>
              <li>Rejected</li>
              <li>Settled</li>
            </ul>
            <p><b>Observable: </b>An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.
            Often Observable is preferred over Promise because it provides the features of Promise and more. With Observable it doesn't matter if you want to handle 0, 1, or multiple events. You can utilize the same API in each case.
            Observable also has the advantage over Promise to be cancellable. If the result of an HTTP request to a server or some other expensive async operation isn't needed anymore, the Subscription of an Observable allows to cancel the subscription, while a Promise will eventually call the success or failed callback even when you don't need the notification or the result it provides anymore.</p>

            <p>While a Promise starts immediately, an Observable only starts if you subscribe to it. This is why Observables are called lazy.</p>
            <p>Observable provides operators like map, forEach, reduce, ... similar to an array</p>
            <hr/>
            <h3>What is event loop?</h3>
            <p>The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading.</p>
            <p>The <b>call stack</b> is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.</p>
            <p>The <b>event queue</b> is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.</p>
            <p>Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.</p>
            <p>An example of this is the setTimeout method. When a setTimeout operation is processed in the stack, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.</p>
            <p>Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.</p>
            <img src={eventloop} alt="" />
            <hr/>
            <h3>What is JsDom?</h3>
            <p>JSDOM is a library which parses and interacts with assembled HTML just like a browser. The benefit is that it isn’t actually a browser. Instead, it implements web standards like browsers do.</p>
            <p>You can feed it some HTML, and it will parse that HTML. Then, you can inspect or modify that HTML in-memory using the normal JavaScript DOM API.</p>
            <hr/>
            <h3>Difference between localStorage, session and cookies?</h3>
            <p><b>loclaStorage</b></p>
            <ul>
              <li>The stored data is stored across browser sessions</li>
              <li>Similar to sessionStorage, except that sessionStorage data gets cleared when the page session ends – that is when the page is closed</li>
              <li>It is cleared when the last “private” tab of a browser is closed</li>
            </ul>
            <img src={localStorage} alt="" />
            <p><b>Session storage</b></p>
            <p>Session Storage objects can be accessed using the sessionStorage read-only property. The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends.</p>
            <img src={sessionStorage} alt="" />
            <p><b>Cookies</b></p>
            <p>The term “cookie” refers to just the textual information about a website. In order to recognize you and show you results according to your preferences, this website saves some information in your local system when you visit a particular website. The history of the internet has long been marked by the use of cookies. A website visitor asks the server for a web page when they visit it. Every request for a server is unique. Likewise, if you visit a hundred times, each request will be considered unique by the server. Since a server receives many requests every second, storing every user’s information on a server doesn’t seem logical and obvious. The same information may not be needed again if you don’t return. Therefore, a cookie is sent and stored on your local machine to uniquely identify you. You will receive a response from the same server the next time you hit it since it recognizes you. Almost every server uses this cookie</p>
            <p><b>Difference</b></p>
            <img src={differencelocalStoragesessioncookie} alt="" />
            <hr/>
            <h3>How to identify browser in javascript?</h3>
            <p>With the help of user agent we can identify the browser type</p>
            <img src={browserVersion} alt="" />
            <hr/>
            <h3>How to detect a mobile device with JavaScript?</h3>
            <p>Again with the help of user agent we can identify. Check below screen shot</p>
            <img src={tabletType} alt="" />
            <p>We can also identify with the help of windows width</p>
            <img src={tabletType1} alt="" />
            <hr/>
            <h3>What is the difference between forEach and map ?</h3>
            <p>The <b>forEach()</b> method is used to loop through each element of an array or object. The forEach() method takes a callback function as an argument. The callback function is invoked for each element of the array or object.</p>
            <p>The <b>forEach()</b> method is similar to the for loop, but it does not have a return value.</p>
            <img src={foreachLoop} alt="" />
            <p>The <b>map()</b> method is used to loop through each element of an array or object. The map() method takes a callback function as an argument. The callback function is invoked for each element of the array or object.</p>
            <p>The <b>map()</b> method is similar to the forEach() method, but it returns a new array.</p>
            <p><b>Other Difference</b></p>
            <p>The <b>map()</b> method can be used with other array methods, such as the filter() method, whereas the <b>forEach()</b> method cannot be used with other array methods.</p>
        </div>
    )
}