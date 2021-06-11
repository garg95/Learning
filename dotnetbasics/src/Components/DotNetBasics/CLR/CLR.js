import React from 'react';
import TopBarIndex from '../../../SideTools/TopBarIndex';
import './CLR.css';

import jit from '../../../Assets/DotNetBasics/jit.PNG';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CLS from './CommonLanguageSpecification/CommonLanguageSpecification';
import CTS from './CTS/CTS';
import Garbage from './GarbageCollector/GarbageCollector';

export default function CLR(){
    const topics=[
        {Name:'Common Language Specification',Path:'/dotnetbasics/clr/cls'},
        {Name:'Common Type System',Path:'/dotnetbasics/clr/cts'},
        {Name:'Garbage Collector',Path:'/dotnetbasics/clr/garbage'}
    ]
    return (
        <div className='CLR'>
            <h1>CLR</h1>
            <ul>
                <li>Suppose you have written a C# program and save it in a file which is known as the Source Code.</li>
                <li>Language specific compiler compiles the source code into the <b>MSIL(Microsoft Intermediate Language)</b> which is also know as the <b>CIL(Common Intermediate Language) or IL(Intermediate Language)</b> along with its metadata. Metadata includes the all the types, actual implementation of each function of the program. MSIL is machine independent code.</li>
                <li>Now CLR comes into existence. CLR provides the services and runtime environment to the MSIL code. Internally CLR includes the JIT(Just-In-Time) compiler which converts the MSIL code to machine code which further executed by CPU. CLR also uses the .NET Framework class libraries. Metadata provides information about the programming language, environment, version, and class libraries to the CLR by which CLR handles the MSIL code. As CLR is common so it allows an instance of a class that written in a different language to call a method of the class which written in another language.</li>
            </ul>
            <img src={jit} alt=""/>
            <h3>Main components of CLR:</h3>
            <TopBarIndex topics={topics} />
            <Switch>
                <Route path='/dotnetbasics/clr/cls' component={CLS} />
                <Route path='/dotnetbasics/clr/cts' component={CTS} />
                <Route path='/dotnetbasics/clr/garbage' component={Garbage} />
            </Switch>
        </div>
    )
}