import React, { useState, useEffect } from 'react';
import useInterval from 'use-interval';

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(1);
    }, []);
    useInterval(() => {
        setCount(count + 1);
    }, 1000);
    return (
        <div>Count: {count}</div>
    );
};

export default Counter;
