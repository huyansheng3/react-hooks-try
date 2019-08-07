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

        componentDidMount() {
            flushEffects(this)
        }

        componentDidUpdate(prevProps, prevState) {
            flushEffects(this)
        }

        componentWillUnmount() {
            flushDisposes(this)
        }

    }
}

function flushDisposes(instance) {
    if (instance.__disposes__) {
        for (const dispose of instance.__disposes__) {
            dispose()
        }
        instance.__disposes__.length = 0 // 清空 disposes
    }
}

function flushEffects(instance) {
    if (instance.__effects__) {
        for (const effect of instance.__effects__) {
            const dispose = effect()
            if (!instance.__disposes__) instance.__disposes__ = []

            if (typeof dispose === 'function') {
                instance.__disposes__.push(dispose)
            }

        }
        instance.__effects__.length = 0 // 清空 effects
    }
}

export function useState(initialValue) {
    const [value, setValue] = getData(instance, initialValue)
    return [value, setValue]
}

export function useEffect(callback) {
    if (!instance.__effects__) instance.__effects__ = []

    instance.__effects__.push(callback)
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
