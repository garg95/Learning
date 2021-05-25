import React from 'react'

import '../../App.css';
import char from '../../Assets/Interview/charDiff.PNG';

export default function SqlInterview(){
    return (
        <div className='Interview'>
            <h3>Difference between char, varchar, nvarchar, nchart?</h3>
            <img src={char} />
            <hr/>
            <h3>What is the max size of char, varchar, nvarchar, nchar?</h3>
            <ul>
                <li><b>CHAR(size)</b>8,000 characters</li>
                <li><b>varchar(n)</b>8,000 characters</li>
            </ul>
            <hr/>
            <h3>What is candidate key?</h3>
            <ul>
                <li>A candidate key is all those tuples(columns) that define can define other non essential tuples</li>
                <li>Out of multiple candidate keys, we pick primary key</li>
                <li>Primary key can be candidate key while candidate key cannot be primary key</li>
            </ul>
            <hr/>
            <h3>What is clustered index?</h3>
            <hr/>
            <h3>What is non clustered index?</h3>
            <hr />
            <h3>Can we use aggregate function without using group by?</h3>
            <p> Yes . Eg: select count(*) from table_name . Here count is aggregate function </p>
            <hr />
            <h3>Can we return table from a funciton?</h3>
            <p>Yes </p>
        </div>
    )
}