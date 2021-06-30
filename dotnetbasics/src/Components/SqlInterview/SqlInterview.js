import React from 'react'

import '../../App.css';
import char from '../../Assets/Interview/charDiff.PNG';
import sqlfunc from '../../Assets/Interview/sqlfunction.PNG';
import rowadd from '../../Assets/Interview/rowaddress.PNG';
import clustered from '../../Assets/Interview/clustered.PNG';
import nonclustered from '../../Assets/Interview/nonclustered.PNG';
import Check1 from '../../Assets/Interview/check1.PNG';
import Check2 from '../../Assets/Interview/check2.PNG';
import rank from '../../Assets/Interview/rank.PNG';
import row_number from '../../Assets/Interview/row_number.PNG';
import dense_rank from '../../Assets/Interview/dense_rank.PNG';
import trancount from '../../Assets/Interview/trancount.PNG';
import nocount1 from '../../Assets/Interview/nocount1.PNG';
import nocount2 from '../../Assets/Interview/nocount2.PNG';

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
            <img src={char} alt=""/>
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
            <img src={clustered} alt=""/>
            <hr/>
            <h3>What is non clustered index?</h3>
            <p>A non-clustered index doesn’t sort the physical data inside the table. In fact, a non-clustered index is stored at one place and table data is stored in another place. This is similar to a textbook where the book content is located in one place and the index is located in another. This allows for more than one non-clustered index per table.</p>
            <img src={nonclustered} alt=""/>
            <p>It is important to mention here that inside the table the data will be sorted by a clustered index. However, inside the non-clustered index data is stored in the specified order. The index contains column values on which the index is created and the address of the record that the column value belongs to.</p>
            <img src={rowadd} alt=""/>
            <p>So if a query is issued to retrieve the gender and DOB of the student named “Jon”, the database will first search the name “Jon” inside the index. It will then read the row address of “Jon” and will go directly to that row in the “student” table to fetch gender and DOB of Jon.</p>
            <hr/>
            <h3>Can we use aggregate function without using group by?</h3>
            <p> Yes . Eg: select count(*) from table_name . Here count is aggregate function </p>
            <hr />
            <h3>Can we return table from a function?</h3>
            <p>Yes (in view or function make sure that column names are unique i.e if Column name "Id" is there in 2 tables then make alias of Id for one table)</p>
            <img src={sqlfunc}alt="" />
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
            <hr/>
            <h3>What will happen if you pass characters more than set limit of a vaiable in proc? For eg proc takes varchar(20) and your are passing 100 characters</h3>
            <p>It will trim to 20 characters</p>
            <hr />
            <h3>How to do Sql tuning?</h3>
            <hr/>
            <h3>How to use transactions in proc and where to use commit and rollback?</h3>
            <hr />
            <h3>How to restrict a particular value to insert in a table?</h3>
            <p>Either we can make use of check constraint or we can make trigger to avoid insertion of such values</p>
            <img src={Check1} alt=""/>
            <img src={Check2}alt="" />
            <hr />
            <h3>What are the different types of triggers?</h3>
            <p><b>There are 2 types of triggers- DDL triggers and DML triggers</b></p>
            <p>We can use only FOR/AFTER clause in DDL triggers not INSTEAD OF clause means we can make only After Trigger on DDL statements.</p>
            <p>We can use both for/after and INSTEAD OF triggers on DML statements</p>
            <hr/>
            <h3>Difference between DataReader and DataAddapter?</h3>
            <p><b>DataReader:</b>It is read only format, we can't update records. It is connection oriented, whenever data bind from database that need connection and then connection is disconnected<br/>DataReader is used to read the data from database and it is a read and forward only connection oriented architecture during fetch the data from database. DataReader will fetch the data very fast when compared with dataset. Generally we will use ExecuteReader object to bind data to datareader. *.Holds the connection open until you are finished (don't forget to close it!). *.Can typically only be iterated over once *.Is not as useful for updating back to the database</p>
            <p><b>DataAddapter:</b> Dataadapter is a disconnected oriented architecture. DataAdapter is like a mediator between DataSet (or) DataTable and database. This dataadapter is used to read the data from database and bind to dataset.DataAdapter will acts as a Bridge between DataSet and database. This dataadapter object is used to read the data from database and bind that data to dataset. Dataadapter is a disconnected oriented architecture. *. Lets you close the connection as soon it's done loading data, and may even close it for you automatically *.All of the results are available in memory *.You can iterate over it as many times as you need, or even look up a specific record by index</p>
            <hr/>
            <h3>Difference between rank , rownumber , dense_rank()</h3>
            <p>Lets do ranking on the base of name</p>
            <h4>Row_Number()</h4>
            <img src={row_number} alt=""/>
            <h4>Rank()</h4>
            <img src={rank} alt=""/>
            <h4>Dense_Rank()</h4>
            <img src={dense_rank} alt=""/>
            <hr/>
            <h3>What is @@TRANCOUNT ?</h3>
            <p>Returns the number of BEGIN TRANSACTION statements that have occurred on the current connection. On every commit count is decremented</p>
            <img src={trancount} alt=""/>
            <hr/>
            <h3>What is <b>SET NOCOUNT ON/OFF</b>?</h3>
            <p>SET NOCOUNT ON/OFF statement controls the behavior in SQL Server to show the number of affected rows in the T-SQL query.</p>
            <ul>
                <li><b>SET NOCOUNT OFF –</b>By default, SQL Server shows the number of affected rows in the messages pane</li>
                <li><b>SET NOCOUNT ON -</b>We can specify this set statement at the beginning of the statement. Once we enable it, we do not get the number of affected rows in the output</li>
            </ul>
            <p>Below image is with set nocount off</p>
            <img src={nocount1} alt=""/>
            <p>Below image is with set nocount on</p>
            <img src={nocount2} alt=""/>
            <hr/>
            <h3>What is @@rowcount and coalesce</h3>
            <p><b>Coalesce: </b>The COALESCE() function returns the first non-null value in a list. Priority is from left to right. </p>
            <p><b>/@/@rowcount: </b>It gives the number of affected rows.</p>
            <hr/>
            <h3>What is the scope of CTE?</h3>
            <p>CTE stands for common table expression. A CTE allows you to define a temporary named result set that available temporarily in the execution scope of a statement such as SELECT, INSERT, UPDATE, DELETE, or MERGE.</p>
            <hr/>
            <h3>Execution plan?</h3>
        </div>
    )
}