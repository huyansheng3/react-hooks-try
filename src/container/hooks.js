import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext, LocaleContext } from '../context'
import style from './hooks.css'

export default function Hooks() {
    const [name, setName] = useState('胡衍生')

    const [title, setTitle] = useState('信控')

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = name;
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

    const { theme, changeTheme } = useContext(ThemeContext)

    const { locale, changeLocale } = useContext(LocaleContext)

    return (
        <div className={theme}>
            <h3>hooks</h3>

            <div>
                <label htmlFor="">姓名</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">标题</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div>
                <span>{width}</span>
            </div>

            <div>
                <span>{locale}</span>
            </div>

            <div>
                <select value={locale} onChange={e => changeLocale(e.target.value)}>
                    <option value="zh-CN">zh-CN</option>
                    <option value="en">en</option>
                    <option value="jp">jp</option>
                </select>
            </div>

            <div>
                <span>{theme}</span>
            </div>

            <div>
                <select value={theme} onChange={e => changeTheme(e.target.value)}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="orange">orange</option>
                </select>
            </div>

        </div>
    )
}