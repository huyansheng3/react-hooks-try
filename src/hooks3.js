import React, { useState, useEffect } from 'react'


function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function onChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        console.log('useWindowWidth useEffect')
        function handleSetWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleSetWidth)
        return () => {
            console.log('useWindowWidth useEffect dispose')
            window.removeEventListener('resize', handleSetWidth)
        }
    }, [])

    return width
}

function useDocumentTitle(title) {
    useEffect(() => {
        console.log('useDocumentTitle useEffect', title)
        document.title = title;
    }, [title])
}

export default function Hooks() {
    const name = useFormInput('胡衍生')

    const title = useFormInput('信控')

    const width = useWindowWidth()

    useDocumentTitle(title.value)

    return (
        <div>
            <h3>hooks3</h3>

            <div>
                <label htmlFor="">姓名</label>
                <input type="text" {...name} />
            </div>

            <div>
                <label htmlFor="">标题</label>
                <input type="text" {...title} />
            </div>

            <div>
                <span>{width}</span>
            </div>

        </div>
    )
}