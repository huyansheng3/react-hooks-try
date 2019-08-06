import React, { Component } from 'react'

// import { useHooks, useState } from "../utils/useHooks";


function useHooks() {

}

function useState() {

}



function CustomHooks(props) {
    const [name, setName] = useState('胡衍生')

    const [title, setTitle] = useState('信控')

    return (
        <div>
            <div>
                <label htmlFor="">姓名</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">标题</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
        </div>
    );
}

export default useHooks(CustomHooks);
