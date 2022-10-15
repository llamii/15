import {useEffect, useState} from "react";

import Board from "./components/Board/Board";

import Helpers from "./helpers";

import "./App.scss";

const helper = new Helpers();

const emptyValue = null;

const createField = () => {
    let arr = helper.shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    return [...arr, emptyValue]
}

function App() {

    const [field, setField] = useState(createField);

    const [moves, setMoves] = useState(0)

    const increaseMoves = () => setMoves(moves + 1)

    useEffect(() => {
        checkWin()
    })

    const moveCells = (element) => () => setField(prevState => {
        const [elementIndex, emptyIndex] = [field.indexOf(element), field.indexOf(emptyValue)];

        if (!helper.canBeMoved(elementIndex, emptyIndex)) return prevState;

        if (element === null) return prevState;

        increaseMoves()

        return prevState.map((el) => {
            if (el === element) return emptyValue;
            if (el === emptyValue) return element;
            return el;
        })
    })

    const checkWin = () => {
        for (let i = 0; i < field.length - 2; i++) {
            if (field[i] + 1 !== field[i + 1]) return false;
        }
        if (field[15] == null) return true;
    }

    return (
    <div className="App">


            <div className="overlay"
                 style={{
                     display: checkWin() ? 'block' : 'none',
                 }}>
                <div className="overlayContainer">
                    <h1 className="overlayText">You won!</h1>
                    <h5>Your record: {moves}</h5>
                    <button className="overlayButton" onClick={() => setField(createField())}>New game</button>
                </div>
            </div>



        <h1>15 puzzles</h1>
        <div className="main">
            <Board className="board" field={field} moveCells={moveCells} checkWin={checkWin}/>
            <h4>Moves: {moves}</h4>
        </div>

        <div className="resetButton">
            <button onClick={() => setField(createField())}>Shuffle</button>
        </div>

    </div>
    );
}

export default App;
