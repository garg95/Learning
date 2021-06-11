import React from 'react';

export default function CTS(){
    return(
        <div>
            <h2>Common Type System</h2>
            <p>Every programming language has its own data type system, so CTS is responsible for understanding all the data type systems of .NET programming languages and converting them into CLR understandable format which will be a common format.</p>
            <p><i>There are 2 Types of CTS that every .NET programming language have :</i></p>
            <ul>
                <li><b>Value Types:</b> Value Types will store the value directly into the memory location. These types work with stack mechanism only. CLR allows memory for these at Compile Time.</li>
                <li><b>Reference Types: </b>Reference Types will contain a memory address of value because the reference types won’t store the variable value directly in memory. These types work with Heap mechanism. CLR allots memory for these at Runtime.</li>
            </ul>
        </div>
    )
}