import React from 'react';

import './BackEnd.css';

export default class BackendHit extends React.Component{
    state={
        Data:[],
        Company:{id:0,name:'',Employees:[]},
        TotalEmployees:0,
        Employees:[],
        index:-1,
        clickedcross:0
    }
    addEmployeeInputs=(event)=>{
        event.preventDefault();
        this.setState({
            TotalEmployees:this.state.TotalEmployees+1,
            clickedcross:0
        });
    }
    updateCompany=(id)=>{
        var company=Object.assign({},this.state.Company);
        company.Employees=this.state.Employees;
        company.id=document.getElementById("companyId").value;
        company.name=document.getElementById("companyName").value;
        
        this.setState({
            Company:company
        },function(){
            const options={
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(this.state.Company)
            };;
            console.log(options);
            fetch('https://localhost:44310/api/ReactFetch',options).then(response=>response.json()).then(response=>response);
        });
        
        
    }
    onInputChange=(event,index)=>{
        
        if(this.state.Employees.length===0)
        {
            let emp={k:index};
            if(event.target.name==='id'){
                emp={...emp,id:event.target.value};
            }
            else{
                emp={...emp,name:event.target.value};
            }
            this.setState({
                Employees:[emp]
            }); 
        }
        else{
            var val=this.state.Employees.filter(x=>x.k===index);

            if(val.length===0)
            {
                let emp={k:index};
                if(event.target.name==='id'){
                    emp={...emp,id:event.target.value};
                }
                else{
                    emp={...emp,name:event.target.value};
                }
                let ob=this.state.Employees;
                ob.push(emp);
                this.setState({
                    Employees:ob
                }); 
            }
            else{
                var obj=this.state.Employees.find(x=>x.k===index);
                if(event.target.name==='id'){
                    obj={...obj,id:event.target.value};
                }
                else{
                    obj={...obj,name:event.target.value};
                }
                let ob=this.state.Employees;
                ob[index]=obj;
                this.setState({
                    Employees:ob
                }); 
            }
        }
    }
    filterout=(i)=>{
        const emp=this.state.Employees.filter(x=>x.k!==i);
        for(var j=i;j<emp.length;j++ )
        {
            emp[j].k=j;
        }
        this.setState({
            Employees:emp,
            TotalEmployees:this.state.TotalEmployees-1,
            index:i,
            clickedcross:1
        },function(){
            console.log(this.state.Employees);
        });
    }
    
    render()
    {
        var employeeInputs;
        console.log("render",this.state.clickedcross);
        
        if(this.state.clickedcross===1)
        {
            employeeInputs= this.state.Employees.map(key=>{
                return (
                    <div key={key.k} id={key.k} onChange={(event=>this.onInputChange(event,key.k))}>
                        <input type='text' name={"id"}  placeholder='Employee ID' value={key.id}/>
                        <input type='text' name={"name"}  placeholder='Employee Name' value={key.name}/>
                        <span onClick={()=>this.filterout(key.k)}><b>X {key.k}</b></span>
                    </div>
                )
            });
        }
        else{
            employeeInputs= [...Array(this.state.TotalEmployees)].map((_,i)=>{
                return (
                    <div key={i} id={i} onChange={(event=>this.onInputChange(event,i))}>
                        <input type='text' name={"id"}  placeholder='Employee ID' />
                        <input type='text' name={"name"}  placeholder='Employee Name' />
                        <span onClick={()=>this.filterout(i)}><b>X {i}</b></span>
                    </div>
                    )
                });
        }
        return(
            <div>
                 <h1>Click on this below button to fetch add data and show</h1>
                 
                 <form>
                     <input type='text' id="companyId" placeholder='Company Id'/>
                     <input type='text' id="companyName" placeholder='Company Name' />
                     <button onClick={this.addEmployeeInputs}>Add More Employee</button>
                     {employeeInputs}

                 </form>
                 <button onClick={()=>this.updateCompany(2)}>Update Data</button>
            </div>
        )
    }
}