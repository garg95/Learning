import React from 'react'

import '../../App.css';
import char from '../../Assets/Interview/charDiff.PNG';
import sqlfunc from '../../Assets/Interview/sqlfunction.PNG';
import rowadd from '../../Assets/Interview/rowaddress.PNG';
import clustered from '../../Assets/Interview/clustered.PNG';
import nonclustered from '../../Assets/Interview/nonclustered.PNG';

export default function SqlInterview(){
    return (
        <div className='Interview'>
            <div>
                <h2>Points to remember</h2>
                <ul>
                    <li>To check index on a particular table - <i>execute sp_helpindex table_name</i></li>
                    <li>Index on more than 1 column is called composite index</li>
                </ul>
            </div>
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
            <p>A clustered index defines the order in which data is physically stored in a table. Table data can be sorted in only way, therefore, there can be only one clustered index per table. In SQL Server, the primary key constraint automatically creates a clustered index on that particular column.</p>
            <img src={clustered} />
            <hr/>
            <h3>What is non clustered index?</h3>
            <p>A non-clustered index doesn’t sort the physical data inside the table. In fact, a non-clustered index is stored at one place and table data is stored in another place. This is similar to a textbook where the book content is located in one place and the index is located in another. This allows for more than one non-clustered index per table.</p>
            <img src={nonclustered} />
            <p>It is important to mention here that inside the table the data will be sorted by a clustered index. However, inside the non-clustered index data is stored in the specified order. The index contains column values on which the index is created and the address of the record that the column value belongs to.</p>
            <img src={rowadd} />
            <p>So if a query is issued to retrieve the gender and DOB of the student named “Jon”, the database will first search the name “Jon” inside the index. It will then read the row address of “Jon” and will go directly to that row in the “student” table to fetch gender and DOB of Jon.</p>
            <hr/>
            <h3>Can we use aggregate function without using group by?</h3>
            <p> Yes . Eg: select count(*) from table_name . Here count is aggregate function </p>
            <hr />
            <h3>Can we return table from a function?</h3>
            <p>Yes (in view or function make sure that column names are unique i.e if Column name "Id" is there in 2 tables then make alias of Id for one table)</p>
            <img src={sqlfunc} />
            <hr/>
            <h3>Can we have 1 primary key for multiple columns?</h3>
            <p>Primary keys must contain UNIQUE values, and cannot contain NULL values. A table can have only ONE primary key; and in the table, this primary key can consist of single or multiple columns</p>
            <hr />
            <h3>Difference between function and storedprocedure ?</h3>
            <ul>
                <li>The function must return a value but in Stored Procedure it is optional. Even a procedure can return zero or n values.</li>
                <li>Functions can have only input parameters for it whereas Procedures can have input or output parameters.</li>
                <li>Functions can be called from Procedure whereas Procedures cannot be called from a Function.</li>
                <li>The procedure allows SELECT as well as DML(INSERT/UPDATE/DELETE) statement in it whereas Function allows only SELECT statement in it.</li>
                <li>Cannot access temporary tables from within a function</li>
                <li>Stored Procedures cannot be used in the SQL statements anywhere in the WHERE/HAVING/SELECT section whereas Function can be.</li>
                <li>An exception can be handled by try-catch block in a Procedure whereas try-catch block cannot be used in a Function</li>
            </ul>
            
        </div>
    )
}