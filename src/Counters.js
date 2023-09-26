import React, {useState} from "react";

function Counter(props) {
    //console.log('counter props', props);
    //console.log('props.counter', props.counter);

    const [count, setCount] = useState(props.counter.value);
    //console.log('count in Counter', count)
    //let count = 3;
    const countChangePlusHandler = () => {
        setCount(count + 1);
        console.log('count in Counter', count);
        console.log('props.id in Counter', props.counter.id);
        props.countChanges(count + 1);
        props.getValueChange({id: props.id, value: count+1});

    }
    const countChangeMinusHandler = () => {
        setCount(count - 1);
        console.log('count in Counter', count);
        props.countChanges(count - 1);
        props.getValueChange(count-1);
    }

    return (
        <div>
            <button onClick={countChangeMinusHandler}>-</button>
            {count}
            <button onClick={countChangePlusHandler}>+</button>
        </div>
    );
}

export default Counter;