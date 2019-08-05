import React, { useContext } from 'react'
import { ThemeContext } from '../context'

function ThemeSelect() {
    const { theme, changeTheme } = useContext(ThemeContext)
    return (
        <select value={theme} onChange={e => changeTheme(e.target.value)}>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="orange">orange</option>
        </select>
    )
}


export default ThemeSelect