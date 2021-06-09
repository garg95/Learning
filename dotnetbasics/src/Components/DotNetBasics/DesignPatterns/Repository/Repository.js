import React from 'react';
import '../../dotnetbasics.css';

import repo1 from '../../../../Assets/DotNetBasics/repo1.PNG';

export default function Repository(){
    return (
        <div className='DNBStyle'>
            <h1>Repository Pattern</h1>
            <p>When we use datacontext layer directly into controllers, it creates tight coupling between controllers and data access layer and if we look closely into this type of code, it violates the <b>Single Responsibility Principle</b> as well as <b>Open close principle</b></p>
            <p>Our purpose will be to separate the controller and the data access layer (database context) using an intermediate layer, in other words repository layer, for communication between the two. So our code structure now changes to the following:</p>
            <img src={repo1} alt="" />
            <p>To implement this pattern, we can either use the approach of having a <b>one-repository per model</b>, which means, each entity of the database will have its own repository, or we can use a <b>generic repository</b>, that can be used by all the entities of the database.</p>
            <h3>What a generic repository is</h3>
            <p>A generic repository is a generic class, with basic CRUD methods in it (and of course other methods can be added as needed). This class and its member functions can be used for any entity of the database. This means, if we have entities Customers and Orders, this single generic class can be used for both of them.</p>
        </div>
    )
}