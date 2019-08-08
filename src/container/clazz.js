import React, { Component } from 'react'
import { ThemeContext, LocaleContext } from '../context'
import style from './hooks.css'

export default class Clazz extends Component {

    render() {
        return (
            <div>
                <h3>Clazz</h3>

                <div>
                    <label htmlFor="">姓名</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">标题</label>
                    <input type="text" />
                </div>

                <div>
                    <span>width</span>
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
                    <span>theme</span>
                </div>

                <div>
                    <select >
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="orange">orange</option>
                    </select>
                </div>

            </div>
        )
    }
}
