import React from 'react';

import web1 from '../../../../Assets/ReactBasics/web1.PNG';
import web2 from '../../../../Assets/ReactBasics/web2.PNG';

export default function webpack_1(){
    return (
        <div className="RBStyle">
            <img src={web1} alt="" style={{marginTop:'5px '}}/>
            <ul>
                <li>It manages dependencies i.e. it make sure that code that needs to load is loading first.</li>
            </ul>
            <hr/>
            <p><b>npm init -y</b> creates package.json file without asking questions like author name, description n all</p>
            <p><b>npm install --save-dev webpack webpack-cli</b> dependencies will be added to your package.json file</p>
            <img src={web2} alt="" />
            <p>Now within a script property inside package.json file lets add some start commands. </p>
            <p>We have to configure the start point or we can say default enntry point.So lets create index.js file inside a src folder(initially had to create a src folder</p>
        </div>
    )
}