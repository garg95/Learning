import React from 'react';


import '../ReactBasics.css';

import Getder from '../../../Assets/ReactBasics/getder.PNG';
import snap from '../../../Assets/ReactBasics/getsnap.PNG';
import snap1 from '../../../Assets/ReactBasics/getsnap1.PNG';

export default class Lifecycle extends React.Component   {
    constructor(props)
    {
        super(props);
        this.state={
            color:'yellow'
        }
    }
    shouldComponentUpdate(nextprops, nextstate) {
        console.log(nextprops, nextstate);
        console.log(this.props, this.state);
    
        return true;  
      }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:'red'});
        },1000);
    }
    componentWillUnmount(){
        console.clear();
    }
    render(){
        return (
            <div className='RBStyle'>
                <h1>Lifecycle of Components</h1>
                <p>Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.</p>
                <p>The three phases are: <b>Mounting, Updating, and Unmounting</b>.</p>
                <h2>Mounting</h2>
                <p>Mounting means putting elements into the DOM.</p>
                <p>React has four built-in methods that gets called, in this order, when mounting a component:</p>
                <ol>
                    <li><b>constructor()</b></li>
                    <li><b>getDerivedStateFromProps()</b> : This is the natural place to set the state object based on the initial props.It takes state as an argument, and returns an object with changes to the state.</li>
                    <li><b>render()</b> The render() method is required and will always be called, the others are optional and will be called if you define them.</li>
                    <li><b>componentDidMount()</b> : Here you cause your side effects. Right Now color is {this.state.color}</li>
                </ol>
                <h2>Updating</h2>
                <p>A component is updated whenever there is a change in the component's state or props.</p>
                <p>React has five built-in methods that gets called, in this order, when a component is updated:</p>
                <ol>
                    <li><b>getDerivedStateFromProps()</b> : The example below has a button that changes the favorite color to blue, but since the getDerivedStateFromProps() method is called, which updates the state with the color from the favcol attribute, the favorite color is still rendered as yellow:</li>
                    <img src={Getder} alt="" style={{height:'200'}}/>
                    <li><b>shouldComponentUpdate():</b>It takes 2 arguments. nextprops,nextstate. Lets say we are updating color from yellow to red. So nextstate will give color red and this.state will give color yello</li>
                    <li><b>render():</b></li>
                    <li><b>getSnapshotBeforeUpdate():</b></li>
                    <img src={snap} alt=""/>
                    <img src={snap1} alt=""/>
                    <li><b>componentDidUpdate():</b></li>
                </ol>
                <h2>Unmounting</h2>
                <p>React has only one built-in method that gets called when a component is unmounted:</p>
                <ol>
                    <li><b>componentWillUnmount():</b>method is called when the component is about to be removed from the DOM.</li>
                </ol>
            </div >
        );
    }
}