import Board from "./components/Board/Board";
import "./App.scss";
import {useState} from "react";

import Helpers from "./helpers";
const helper = new Helpers();

const createField = () => {
    let arr = helper.shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    arr.push(null)
    return arr
}

function App() {

    const [field, setField] = useState(createField());

    const moveCells = (element) => setField(prevState => {
        prevState.map(i => {
            if (i === element) return null;
            if (i === null) return element;
            return i;
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
