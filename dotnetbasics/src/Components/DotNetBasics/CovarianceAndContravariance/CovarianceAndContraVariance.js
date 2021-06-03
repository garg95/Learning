import React from 'react';

import '../dotnetbasics.css';

import cov from '../../../Assets/DotNetBasics/covariance.PNG';
import cov1 from '../../../Assets/DotNetBasics/cov1.PNG';
export default function covarianceAndContravariance() {
    return (
        <div className='DNBStyle'>
            <a href='https://www.tutorialsteacher.com/csharp/csharp-covariance-and-contravariance'>TutorialsTeacher</a>
            <br/>
            <a href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/covariance-contravariance/'>Mircrosoft</a>
            <h1>Covariance And Contravariance</h1>
            <p>In C#, covariance and contravariance enable implicit reference conversion for array types, delegate types, and generic type arguments. Covariance preserves assignment compatibility and contravariance reverses it.</p>
            <img src={cov} alt=""/>
            <p>Covariance for arrays enables implicit conversion of an array of a more derived type to an array of a less derived type. But this operation is not type safe, as shown in the following code example.</p>
            <img src={cov1} alt=""/>

            <h3>Covariance with Delegate</h3>
            <p>Covariance in delegates allows flexiblity in the return type of delegate methods.</p>

            <h3>Contravariance with Delegate</h3>
            <p>Contravariane is applied to parameters. Cotravariance allows a method with the parameter of a base class to be assigned to a delegate that expects the parameter of a derived class.</p>
        </div >
    )
}