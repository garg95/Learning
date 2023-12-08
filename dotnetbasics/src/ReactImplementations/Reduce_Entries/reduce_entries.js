import React from 'react';
import newMap from '../../Assets/ReactBasics/map.PNG';
export default class reduce_entries extends React.Component {
    state = {
        registry: null,
        reducedRegistry: null,
        entriesRegistry: null,
        justTest:null
    }
    shouldComponentUpdate(){
        return true;
    }
    
    load = () => {
        let reg = new Map(); //reg.has(key) returns true or false //reg.get(key) --value is returned //reg.set
        reg.set(1, { Id: '1', Name: 'Vishal' });
        reg.set(2, { Id: '2', Name: 'Garg' });
        reg.set(3, { Id: '1', Name: 'Rahul' });
        reg.set(4, { Id: '2', Name: 'Sureh' });
        reg.set(5,{ Id: '3', Name: 'Sharma' })
        const arr = Array.from(reg.values()).sort((a,b)=> b.Id-a.Id);
        console.log(arr);
        
        this.setState({
            registry: arr
        });

    }
    showc = () => {
        const grouped = this.state.registry.reduce((activities, activity) => {
            console.log(activity);
            const id = activity.Id;
            activities[id] = activities[id] ? [...activities[id], activity] : [activity]
            return activities;
        }, {});
        this.setState({
            reducedRegistry: grouped
        });
        console.log(grouped);
    }
    entriesc = () => {
        this.setState({
            entriesRegistry: Object.entries(this.state.reducedRegistry)
        })
        console.log(Object.entries(this.state.reducedRegistry));
    }
    componentWillUnmount() {
        console.clear();
    }
    render() {
        return (
            <div>
                <h3>Make sure you provide starting index for your .reduce() and this .reduce works on array</h3>
                <h4> Some info on <b>new Map()</b></h4>
                <img src={newMap} alt="" style={{display:'block'}}/>
                <br/>
                <button onClick={this.load}>1 Load data</button>
                <button onClick={this.showc}>2 Show Reduce functionality</button>
                <button onClick={this.entriesc}>3 Entries funcitonality</button>
                {this.state.entriesRegistry && this.state.entriesRegistry.map(([id, val]) => {
                    return (
                        <div key={id}>
                            <h1>{id}</h1>
                            {val.map(key=>{
                                return <p key={key.Name}>{key.Name}</p>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}