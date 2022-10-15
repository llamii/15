import React from 'react';

import Cell from "../Cell/Cell";

import "./Board.scss"

function Board(props) {
    return (
        <div className="Board">
            {props.field.map((cell, index) =>
                <Cell
                    value={cell}
                    key={index}
                    pos={index}
                    moveCell={props.moveCells(cell)}
                    checkWin={props.checkWin}
                />
            )}
        </div>
    )
}

export default Board;