import React, {useState} from "react";
import './App.css';
//import Counter from "./Counter";

const counters = [
    {
        id: 0,
        value: 0
    },
    {
        id: 1,
        value: 1
    }
];

const calcTotal = (objArr) => {
    return objArr.reduce((acc, currEl) => acc + currEl.value, 0);
}

function App() {


    const [totalCount, setTotalCount] = useState(calcTotal(counters));
    const [count1, setCount1] = useState(counters[0].value);
    const [count2, setCount2] = useState(counters[1].value);

    function updateCountersArrOnValueChange(counterObj) {
        console.log('counterObj from updateCounterValueOnChange', counterObj);

        const updatedCountersArr = [];
        for (let i = 0; i < counters.length; i++) {
            if (counters[i].id === counterObj.id) {
                console.log('got into if');
                console.log('counters[i].id', counters[i].id);
                console.log('counterObj.id', counterObj.id);
                console.log('counterObj.value', counterObj.value);
                console.log('equal', counters[i].id === counterObj.id);
                updatedCountersArr.push({
                    id: counters[i].id,
                    value: counterObj.value

                })
                console.log('updatedCountersArr in if', updatedCountersArr);
            } else updatedCountersArr.push(counters[i]);


        }

        //console.log('old counters', counters);
        //console.log('new counters', updatedCountersArr);
        //console.log('updatedCountersArr', updatedCountersArr);

        setTotalCount(calcTotal(updatedCountersArr));
        //counters.map((el.id === counterObj.id) => updatedCountersArr.push(el));

        // const updatedCounters = (counterObj) => {
            //[...counters,
            //counters.map((el => {
            //if (el.id === counterObj.id) {
            // el.value = counterObj.value
            //}
            //}))];
            //setTotalCount(777);
       // }

        //setTotalCount(777);
        //setTotalCount(calcTotal(updatedCounters));
    }



    const countChangePlusHandler = (counterObj, countState, setCountSetter) => {
        const newCountState = ++countState;
        setCountSetter(newCountState);
        console.log('newCountState local counter', newCountState);
        updateCountersArrOnValueChange({id: counterObj.id, value: newCountState});
    }
    const countChangeMinusHandler = (counterObj, countState, setCountSetter) => {
        const newCountState = --countState;
        setCountSetter(newCountState);
        console.log('newCountState local counter', newCountState);
        updateCountersArrOnValueChange({id: counterObj.id, value: newCountState});
    }

    return (
        <>
            <div>
                Total:{totalCount}
            </div>
            <hr/>

            <div>
                <button onClick={() => countChangeMinusHandler(counters[0], count1, setCount1)}>-</button>
                {count1}
                <button onClick={()=> countChangePlusHandler(counters[0], count1, setCount1)}>+</button>
            </div>
            <hr/>

            <div>
                <button onClick={()=> countChangeMinusHandler(counters[1], count2, setCount2)}>-</button>
                {count2}
                <button onClick={() => countChangePlusHandler(counters[1], count2, setCount2)}>+</button>
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
