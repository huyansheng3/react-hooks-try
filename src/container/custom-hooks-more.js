import React from 'react'

// import { useState } from 'react'

import { useHooks, useState } from "../utils/useHooks";

function CustomHooks1(props) {
    const [name, setName] = useState('胡衍生')
    console.log('CustomHooks1')
    return (
        <div>
            <div>
                <label htmlFor="">姓名</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
        </div>
    );
}

function CustomHooks2(props) {
    const [title, setTitle] = useState('信控')
    console.log('CustomHooks2')
    return (
        <div>
            <div>
                <label htmlFor="">标题</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
        </div>
    );
}

CustomHooks1 = useHooks(CustomHooks1);
CustomHooks2 = useHooks(CustomHooks2);

function CustomHooks() {
    return (
        <div>
            <CustomHooks1></CustomHooks1>
            <CustomHooks2></CustomHooks2>
        </div>
    )
}

export default CustomHooks

// export default useHooks(CustomHooks);
