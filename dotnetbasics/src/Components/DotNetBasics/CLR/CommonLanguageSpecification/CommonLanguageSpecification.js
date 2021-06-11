import React from 'react'


export default function CommonLanguageSpecification(){
    return (
        <div>
            <h2>Common Language Specification</h2>
            <p>It is responsible for converting the different .NET programming language syntactical rules and regulations into CLR understandable format. Basically, it provides the <b>Language Interoperability</b>. Language Interoperability means to provide the execution support to other programming languages also in .NET framework.</p>
            <p><b>Language Interoperability can be achieved in two ways :</b></p>
            <ul>
                <li><b>Managed Code:</b> The MSIL code which is managed by the CLR is known as the Managed Code.For managed code CLR provides three .NET facilities:</li>
                <ul>
                    <li><b>CAS(Code Access Security)</b></li>
                    <li><b>Exception Handling</b></li>
                    <li><b>Automatic Memory Management.</b></li>
                </ul>
                <li><b>Unmanaged Code: </b>Before .NET development the programming language like .COM Components and Win32 API do not generate the MSIL code. So these are not managed by CLR rather managed by Operating System.</li>
            </ul>
        </div>
    )
}