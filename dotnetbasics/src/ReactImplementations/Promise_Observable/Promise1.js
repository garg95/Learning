import axios from 'axios';
import React,{Component} from 'react';


export default class  Promi extends Component{
    state={
        value:[]
    }
    componentDidMount(){
        
        var promise=new Promise((resolve,reject)=>{
            let val=true;
            let counter=0;
            axios.get('https://localhost:44310/api/values').then(response=>this.setState({value:response.data}));
            while(val)
            {
                setTimeout(()=>{
                    if(this.state.value.length>0)
                    {
                        val=false;
                        resolve("Value received")
                    }
                    else if(counter>3)
                    {
                        reject(Error("Promise rejected"));
                        //val=false;
                    }
                    else{
                        counter=counter+1;
                    }
                },1000);
            }
        });
        promise.then(res=>console.log(res),function(error){console.log(error)});
    }

    componentDidUpdate(){
        console.log(this.state.value);
    }
    render(){
        return (
            <div>Promise</div>
        )
    }
    
}