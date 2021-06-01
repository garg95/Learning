import React from 'react';
// import microOrm from '../../../Assets/DotNetBasics/microOrm1.png';


import '../dotnetbasics.css';
export default function jwttoken() {
    return (
        <div className='DNBStyle'>
            <h1>jwt Token</h1>
            <p>Things to consider in mind while creating JWT token. Basically we need 5 things to create token</p>
            <ol>
                <li>Userid and pasword</li>
                <li>Algorithm (HMAC) to encrypt all the info </li>
                <li>Claims(i.e user roles )</li>
                <li>Secret Key -&gt; This is needed with algorithm so that no one can know which algo is being used to encrypt the info</li>
                <li>Token expiry , issuer etc </li>
            </ol>
            <p>It is passed in json format </p>
            <p>To implement this we have to install package Authentication.JwtBearer</p>
            <p>You need to set attribute [Authorize] for this to work</p>
            <h3>Now what is bearer ?</h3>
            <h3>Can someone steal your token? And how can we prevent it</h3>
            <p>To steal the token</p>
            <ul>
                <li>SOmeone first have to get hold of your computer</li>
                <li>Lets say somehow your token is taken by someone else, so to ensure that token comes from same user we can set location,browser info in token</li>
            </ul>
        </div >
    )
}