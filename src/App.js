import {useState} from "react";

import Board from "./components/Board/Board";

import Helpers from "./helpers";

import "./App.scss";

const helper = new Helpers();

const emptyValue = null;

const createField = () => {
    let arr = helper.shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    return [...arr, emptyValue];
}

function App() {

    const [field, setField] = useState(createField);

    const moveCells = (element) => () => setField(prevState => {
        const [elementIndex, emptyIndex] = [field.indexOf(element), field.indexOf(emptyValue)];

        if (!helper.canBeMoved(elementIndex, emptyIndex)) return prevState;

        if (element === null) return prevState;

        return prevState.map((el) => {
            if (el === element) return emptyValue;
            if (el === emptyValue) return element;
            return el;
        })
    })

    return (
    <div className="App">
        <h1>Shuffle game</h1>
        <Board field={field} moveCells={moveCells}/>
        <div className="resetButton">
            <button onClick={() => setField(createField())}>Reset</button>
        </div>
    </div>
    );
}

export default App;
