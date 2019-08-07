import React, { Component } from 'react'

let instance

function setCurrentInstance(ins) {
    instance = ins
    instance.__index__ = 0
}

export function useHooks(SFC) {
    return class extends Component {
        render() {
            setCurrentInstance(this)
            return <SFC {...this.props} />
        }
    }
}

export function useState(initialValue) {
    const [value, setValue] = getData(instance, initialValue)
    return [value, setValue]
}

function getData(instance, initialValue) {
    if (!instance.__states___) instance.__states___ = []

    // 首次render
    if (!instance.__isNotFirstRender___) {
        const index = instance.__index__
        function setValue(val) {
            instance.__states___[index][0] = val
            instance.forceUpdate()
        }
        instance.__states___.push([
            initialValue,
            setValue
        ])
    }

    const result = instance.__states___[instance.__index__]
    instance.__index__ += 1
    return result
}
