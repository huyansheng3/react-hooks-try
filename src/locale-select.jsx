import React, { useContext } from 'react'
import { LocaleContext } from './context'

function LocaleSelect() {
    const { locale, changeLocale } = useContext(LocaleContext)
    return (
        <select value={locale} onChange={e => changeLocale(e.target.value)}>
            <option value="zh-CN">zh-CN</option>
            <option value="en">en</option>
            <option value="jp">jp</option>
        </select>
    )
}


export default LocaleSelect