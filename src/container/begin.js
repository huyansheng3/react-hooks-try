import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext, LocaleContext } from '../context'
import style from './hooks.css'


function useFormInput(initVal) {
    const [value, setValue] = useState(initVal)

    function onChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange
    }
}

function useDocTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

function useWinWidth() {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function setWinWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', setWinWidth)
        return () => {
            window.removeEventListener('resize', setWinWidth)
        }
    })

    return width
}

export default function Begin(props) {
    const name = useFormInput('hu')
    const title = useFormInput('信控')

    const { theme, changeTheme } = useContext(ThemeContext)

    useDocTitle(title.value)

    const width = useWinWidth()


    return (
        <div className={theme}>
            <h3>Begin hooks</h3>

            <div>
                <label htmlFor="">姓名</label>
                <input {...name} type="text" />
            </div>

            <div>
                <label htmlFor="">标题</label>
                <input {...title} type="text" />
            </div>

            <div>
                <span>{width}</span>
            </div>

            <div>
                <span>locale</span>
            </div>

            <div>
                <select >
                    <option value="zh-CN">zh-CN</option>
                    <option value="en">en</option>
                    <option value="jp">jp</option>
                </select>
            </div>

            <div>
                <span>{theme}</span>
            </div>

            <div>
                <select value={theme} onChange={e => changeTheme(e.target.value)} >
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="orange">orange</option>
                </select>
            </div>

        </div>
    )
}