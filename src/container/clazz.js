import React, { Component } from 'react'
import { ThemeContext, LocaleContext } from '../context'
import style from './hooks.css'



export default class Clazz extends Component {

    state = {
        name: 'hu',
        title: '信控',
        width: window.innerWidth
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value })
        this.updateDocTitle()
    }

    handleWidthChange = () => {
        this.setState({ width: window.innerWidth })
    }


    handleNameChange = e => {
        this.setState({ name: e.target.value })
    }

    updateDocTitle() {
        document.title = this.state.title
    }

    componentDidMount() {
        this.updateDocTitle()
        window.addEventListener('resize', this.handleWidthChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWidthChange)
    }


    render() {
        const { name, title, width } = this.state

        return (
            <ThemeContext.Consumer>
                {({ theme, changeTheme }) => {
                    return (
                        <div className={theme}>
                            <h3>Clazz</h3>

                            <div>
                                <label htmlFor="">姓名</label>
                                <input value={name} onChange={this.handleNameChange} type="text" />
                            </div>

                            <div>
                                <label htmlFor="">标题</label>
                                <input value={title} onChange={this.handleTitleChange} type="text" />
                            </div>

                            <div>
                                <span>{width}</span>
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
                }}
            </ThemeContext.Consumer>


        )
    }
}
