import React, { useContext, useEffect, useState } from 'react'

// 目前只有 getSnapshotBeforeUpdate  componentDidCatch 官方不支持
export function useDidMount(callback) {
    useEffect(callback, [])
}

export function useUnMount(callback) {
    useEffect(() => callback, [])
}

export function useUpdate(callback) {
    const mounting = useRef(true);
    useEffect(() => {
        if (mounting.current) {
            mounting.current = false;
        } else {
            callback();
        }
    });
}

const useLogger = (componentName, ...params) => {
    useDidMount(() => {
        console.log(`${componentName}初始化`, ...params);
    });
    useUnMount(() => {
        console.log(`${componentName}卸载`, ...params);
    })
    useUpdate(() => {
        console.log(`${componentName}更新`, ...params);
    });
};

function useIsMounted() {
    const [isMount, setIsMount] = useState(false);
    useEffect(() => {
        if (!isMount) {
            setIsMount(true);
        }
        return () => setIsMount(false);
    }, []);
    return isMount;
}

// 等价于 this.forceUpdate
export function useForceUpdate() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    return forceUpdate
}

// 获取上一次渲染的值
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}






