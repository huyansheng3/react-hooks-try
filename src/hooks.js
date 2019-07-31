import React, { useState, useEffect } from 'react'

export default function Hooks() {
    const [name, setName] = useState('胡衍生')

    const [title, setTitle] = useState('信控')

    const [width, setWidth] = useState(window.innerWidth)

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })

    useEffect(() => {
        function handleSetWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleSetWidth)
        return () => {
            window.removeEventListener('resize', handleSetWidth)
        }
    })

    return (
        <div>
            <h3>hooks</h3>

            <div>
                <label htmlFor="">姓名</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">标题</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <div>
                <span>{width}</span>
            </div>

        </div>
    )
}