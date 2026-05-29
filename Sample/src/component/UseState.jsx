import React, { useState } from 'react';

function UseState() {
    const [color, setColor] = useState('blue');
    const [count, setCount] = useState(0);

    const mouseover = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1 style={{ color }} onMouseOver={mouseover}>
                Hover to change color
            </h1>

            <h2>Count: {count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default UseState;