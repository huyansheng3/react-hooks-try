import React, { useState, useEffect, useRef } from 'react'
import Modal from 'antd/es/modal';
import "antd/lib/modal/style/index.css";

export default class ModalClazz extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleClose = e => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <div>
                <button type="primary" onClick={this.showModal}>
                    Open Modal ModalClazz
                </button>

                <Modal
                    title="ModalClazz"
                    visible={this.state.visible}
                    onOk={this.handleClose}
                    onCancel={this.handleClose}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        );
    }
}
