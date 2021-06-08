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
            <h3>Difference between arrow function and regular function</h3>
            <p style={{fontSize:'30px'}}><b>Constructors</b></p>
            <p>Regular function</p>
            <img src={regc} alt="" />
            <p>Arrow function</p>
            <img src={arrowc} alt="" />
            <p style={{fontSize:'30px'}}><b>Implicit Return</b></p>
            <p style={{fontSize:'30px'}}><b>Methods</b></p>
            <a href="https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/">Check here</a>
            <hr/>
            <h3>What is Object Destructuring?</h3>
            <img src={destructure} alt="" />
        </div>
    )
}