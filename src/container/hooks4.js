import React, { useState, useEffect, useRef } from 'react'


function useInterval(callback, delay) {
    let savedCallback = useRef()

    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay])
}

// hooks中隐藏的一些陷阱
export default function Hooks() {
    const [count, setCount] = useState(0);

    function handleAlertClick() {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000);
    }

    // useEffect(() => {
    //     console.log(`You clicked ${count} times`)
    //     document.title = `You clicked ${count} times`;
    // });

    // const countRef = useRef(count)

    // function handleAlertClick() {
    //     setTimeout(() => {
    //         alert('You clicked on: ' + countRef.current);
    //     }, 3000);
    // }

    // hooks 与 setInterval api天然不匹配，极其难用
    // useEffect(() => {
    //     console.log('setInterval effect')
    //     const id = setInterval(() => {
    //         console.log(count)
    //         setCount(count + 1);
    //     }, 1000);
    //     return () => {
    //         console.log('setInterval effect dispose')
    //         clearInterval(id)
    //     };
    // });

    // useInterval(() => {
    //     setCount(count + 1);
    //     console.log(count + 1)
    // }, 1000)

    return (
        <div>
            <h3>hooks4 hooks中隐藏的一些陷阱</h3>

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