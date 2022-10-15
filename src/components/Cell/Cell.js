import React from 'react';
import "./Cell.scss"


function Cell(props) {
    return (
        <div className="Cell" onClick={() => props.moveCell(props.pos)}>
            <h1>{props.value}</h1>
        </div>
    );
}

export default Cell;