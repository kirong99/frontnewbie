import React, { createContext, useCallback, useState } from 'react';



const ColorContext = createContext({
    state : { color : 'inherit', postcolor : 'yellow', stickercolor: 'red'},
    actions : {
        setColor : () => {},
        setPostcolor : () => {},
        setStickercolor : () => {}
    },
});

const ColorProvider = ({children}) => {
    
    const postcolors = JSON.parse(localStorage.getItem("postColor"))
    
    const [color, setColor] = useState('white');
    const [postcolor, setPostcolor] = useState(postcolors);
    const [stickercolor, setStickercolor] = useState('#ffafaf')
    const value = {
        state : { color, postcolor, stickercolor },
        actions : { setColor, setPostcolor, setStickercolor },
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );

};

const { Consumer : ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;