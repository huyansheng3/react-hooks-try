import React, { useState, useEffect, useRef, useCallback } from 'react'
import Modal from 'antd/es/modal';
import "antd/lib/modal/style/index.css";

function useBoolean(initBool: Boolean) {
    const [value, setValue] = useState(initBool)

    const turnOn = useCallback(function turnOn() {
        setValue(true)
    }, [])

    const turnOff = useCallback(function turnOff() {
        setValue(false)
    }, [])

    return [
        value,
        turnOn,
        turnOff
    ]
}

export default function ModalHooks(props) {
    const [visible, turnOn, turnOff] = useBoolean(false)

    return (
        <div>
            <button type="primary" onClick={turnOn}>
                Open Modal ModalHooks
            </button>

            <Modal
                title="ModalHooks"
                visible={visible}
                onOk={turnOff}
                onCancel={turnOff}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    );
}