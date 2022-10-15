import React, {useState} from 'react';
import Cell from "../Cell/Cell";
import "./Board.scss"

import Helpers from "../../helpers";
const helper = new Helpers();

function Board(props) {

    const moveCell = (pos) => {
        if (helper.canBeMoved(pos, props.field.indexOf(null))) {
            props.moveCells(pos);
        }
    }

    return (
        <div className="Board">
            {props.field.map((cell, index) =>
                <Cell
                    value={cell}
                    key={index}
                    pos={index}
                    moveCell={moveCell}
                />
            )}
        </div>

    )

}

export default Board;