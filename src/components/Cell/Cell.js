import React from 'react';

import "./Cell.scss"

function Cell(props) {
    return (
        <div className="Cell" onClick={props.moveCell} >
            <h1 className= {
                props.checkWin()?'win':'default'
            }>{props.value}</h1>
        </div>
    );
}

export default Cell;