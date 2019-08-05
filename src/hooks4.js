import React, { useState, useEffect, useRef } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    // const countRef = useRef(count)

    // function handleAlertClick() {
    //     setTimeout(() => {
    //         alert('You clicked on: ' + countRef.current);
    //     }, 3000);
    // }

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         console.log(count)
    //         setCount(count + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);

    return (
        <div>
            <h3>hooks4</h3>

            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => {
                    setCount(count + 1)
                    // countRef.current = count + 1
                }}>
                    Click me
                </button>
                <button onClick={handleAlertClick}>
                    Show alert
                </button>
            </div>

        </div>
    )
}