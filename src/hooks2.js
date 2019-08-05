import React, { useState, useEffect, useContext } from 'react'
import LocaleSelect from './locale-select'
import ThemeSelect from './theme-select'
import { ThemeContext, LocaleContext } from './context'
import style from './hooks.css'

function useFormInput(initialValue: String) {
    console.log('useFormInput', initialValue)
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

    console.log('useWindowWidth')

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
    })

    return width
}

function useDocumentTitle(title: String) {
    console.log('useDocumentTitle', title)
    useEffect(() => {
        console.log('useDocumentTitle useEffect', title)
        document.title = title;
    })
}


export default function Hooks() {
    const name = useFormInput('胡衍生')

    const title = useFormInput('信控')

    const width = useWindowWidth()

    useDocumentTitle(title.value)

    const { theme } = useContext(ThemeContext)
    const { locale } = useContext(LocaleContext)

    return (
        <div className={theme}>
            <h3>hooks2</h3>

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


            <div>
                <div>{locale}</div>
                <LocaleSelect></LocaleSelect>
            </div>


            <div>
                <div>{theme}</div>
                <ThemeSelect></ThemeSelect>
            </div>

        </div>
    )
}