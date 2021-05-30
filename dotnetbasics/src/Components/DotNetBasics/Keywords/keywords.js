import React from 'react';
// import microOrm from '../../../Assets/DotNetBasics/microOrm1.png';


import '../dotnetbasics.css';
export default function keywords() {
    return (
        <div className='DNBStyle'>
            <h2>Volatile</h2>
            <p>The volatile keyword is a convenience keyword for those who need to access member variables of a class or structure in multi-threaded conditions.</p>
            <p>The purpose of the volatile keyword is to tell the compiler that the variable you are marking as volatile may be accessed by multiple threads. There are certain optimizations that the csharp compiler makes when it compiles our code and unless the variable is marked as volatile, the compiler will make optimizations assuming that the variable will only be accessed by one thread at a time.</p>
            <p>Note that the volatile keyword can only be used against the following types of data:</p>
            <ul>
                <li>Reference types</li>
                <li>Types such as sbyte, byte, short, ushort, int, uint, char, float, and bool</li>
                <li>An enum type with one of the following base types: byte, sbyte, short, ushort, int, or uint</li>
                <li>Generic type parameters known to be reference types</li>
            </ul>
            <p>Only variables that are members of classes or structures can be declared as volatile.</p>
            <p><b>Note :</b>Please keep in mind that the volatile modifier does not force synchronization of loads and stores;instead it simply tells the compiler not to change the order of accesses to the field.By eliminating reordering optimizations, the code becomes more predictable from a programmer's perspective.</p>
        </div >
    )
}