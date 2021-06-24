import React from 'react';

import web1 from '../../../../Assets/ReactBasics/web1.PNG';

export default function webpack_1(){
    return (
        <div className="RBStyle">
            <img src={web1} alt="" style={{marginTop:'5px '}}/>
            <ul>
                <li>It manages dependencies i.e. it make sure that code that needs to load is loading first.</li>
            </ul>
            <hr/>
            <p><b>npm init -y</b> creates package.json file without asking questions like author name, description n all</p>
        </div>
    )
}