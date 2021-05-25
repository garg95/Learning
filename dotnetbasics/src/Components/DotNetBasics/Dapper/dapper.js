import React from 'react';
import microOrm from '../../../Assets/DotNetBasics/microOrm1.png';
import query from '../../../Assets/DotNetBasics/query.PNG';

import '../dotnetbasics.css';
export default function dapper() {
    return (
        <div className='DNBStyle'>
            <p>Why there is need of dapper?</p>
            <p><a href='https://samsaffron.com/archive/2011/03/30/How+I+learned+to+stop+worrying+and+write+my+own+ORM'>Write own micro orm</a></p>
            <ul>
                <li>Dapper is a good choice in scenarios where read-only data changes frequently and is requested often. It is particularly good in stateless scenarios (e.g. the web) where there is no need to persist complex object graphs in memory for any duration.</li>
                <li>Dapper does not translate queries written in .NET languages to SQL like a full blown ORM. So you need to be comfortable writing queries in SQL, or have someone write them for you.</li>
                <li>Dapper falls into a family of tools known as micro-ORMs. These tools perform only a subset of the functionality of full-blown Object Relations Mappers, such as Entity Framework Core.</li>
            </ul>
            <img src={microOrm}  alt="micro orm" />
            <ul>
                <li>Dapper has no real expectation about the schema of your database. It is not reliant on conventions in the same way as Entity Framework Core, so Dapper is also a good choice where the structure of the database isn't particularly normalised.</li>
                <li>Dapper works with an ADO.NET <b>IDbConnection object</b>, which means that it will work with any database system for which there is an ADO.NET provider.</li>
            </ul>
            <img src={query}  alt="query" />
        </div >
    )
}