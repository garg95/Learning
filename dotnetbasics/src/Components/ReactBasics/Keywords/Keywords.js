import React from 'react';

import '../ReactBasics.css';

export default class Keywords extends React.PureComponent{
    render()
    {
        return(
            <div className="RBStyle">
                <h1>React.PureComponent()</h1>
                <p>This optimizes your class by rendering only when values in the state changes</p>
                <p>React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.</p>
            </div>
        );
    }
}