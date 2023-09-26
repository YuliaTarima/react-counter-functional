import React, {useState} from "react";
import {countersInitialArr} from "./AppData.js";
import './App.css';
//import Counter from "./Counter";

const calcTotal = (objArr) => objArr.reduce((acc, currEl) => acc + currEl.value, 0);

function App() {
    const [totalCount, setTotalCount] = useState(calcTotal(countersInitialArr));
    const [countersDynamicState, setCountersDynamicState] = useState(countersInitialArr);
    const [count1, setCount1] = useState(countersInitialArr[0].value);
    const [count2, setCount2] = useState(countersInitialArr[1].value);

    function updateCountersArrStateOnValueChange(counterObj, countersArrCurrState) {

        /** update current counters array that is stored in state with a changed value of an updated counter */
        /*const updatedCountersArr = [];
        for (let i = 0; i < countersArrCurrState.length; i++) {
            if (countersArrCurrState[i].id === counterObj.id) {
                updatedCountersArr.push({
                    id: countersArrCurrState[i].id,
                    value: counterObj.value

                })
            } else updatedCountersArr.push(countersArrCurrState[i]);
        }*/
        const updatedCountersArr = countersArrCurrState.map(el =>
            el.id === counterObj.id
                ? {id: el.id, value: counterObj.value}
                : el
        );

        /** Set new total in state from value sum calculations of an updated above counters array */
        setTotalCount(calcTotal(updatedCountersArr));

        /** Store updated counters array in state */
        setCountersDynamicState(updatedCountersArr);
    }

    const counterActionHandler = (counterObj, counterAction, countState, setCountSetter) => {
        const newCountState = counterAction === 'plus' ? ++countState : --countState;
        setCountSetter(newCountState);
        updateCountersArrStateOnValueChange({id: counterObj.id, value: newCountState}, countersDynamicState);
    }
    const countChangePlusHandler = (counterObj, countState, setCountSetter) => {
        const newCountState = ++countState;
        setCountSetter(newCountState);
        updateCountersArrStateOnValueChange({id: counterObj.id, value: newCountState}, countersDynamicState);
    }
    const countChangeMinusHandler = (counterObj, countState, setCountSetter) => {
        const newCountState = --countState;
        setCountSetter(newCountState);
        updateCountersArrStateOnValueChange({id: counterObj.id, value: newCountState}, countersDynamicState);
    }

    return (
        <>
            <div>
                Total:{totalCount}
            </div>
            <hr/>

            <div>
                <button onClick={() => counterActionHandler(countersInitialArr[0], 'minus', count1, setCount1)}>-</button>
                {/*<button onClick={() => countChangeMinusHandler(countersInitialArr[0], count1, setCount1)}>-</button>*/}
                {count1}
                {/*<button onClick={() => countChangePlusHandler(countersInitialArr[0], count1, setCount1)}>+</button>*/}
                <button onClick={() => counterActionHandler(countersInitialArr[0], 'plus', count1, setCount1)}>+</button>
            </div>
            <hr/>

            <div>
                <button onClick={() => counterActionHandler(countersInitialArr[1], 'minus', count2, setCount2)}>-</button>
                {/* <button onClick={() => countChangeMinusHandler(countersInitialArr[1], count2, setCount2)}>-</button>*/}
                {count2}
                {/*<button onClick={() => countChangePlusHandler(countersInitialArr[1], count2, setCount2)}>+</button>*/}
                <button onClick={() => counterActionHandler(countersInitialArr[1], 'plus', count2, setCount2)}>+</button>
            </div>

            {/*
            <Counter counter={counters[0]}
                     countChanges={countChanges}
                     updateCounterValueOnChange={() => updateCounterValueOnChange(counters[0])}
            />
            <hr/>
            <Counter counter={counters[1]}
                     countChanges={countChanges}
                     updateCounterValueOnChange={() => updateCounterValueOnChange(counters[1])}
            />
            */}
        </>

    );
}

export default App;
