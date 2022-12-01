import React, { createContext, useState } from 'react';

const postColorData = JSON.parse(localStorage.getItem("postColor"))
const noteColorData = localStorage.getItem("noteColor")
const stickerColorData = JSON.parse(localStorage.getItem("stickerColor"))
const ColorContext = createContext({
    state : { color : 'inherit', postcolor : 'yellow', stickercolor: 'red'},
    actions : {
        setColor : () => {},
        setPostcolor : () => {},
        setStickercolor : () => {}
    },
});

const ColorProvider = ({children}) => {
    
    const [color, setColor] = useState(noteColorData != null ? noteColorData : []);
    const [postcolor, setPostcolor] = useState(postColorData != null ? postColorData : []);
    const [stickercolor, setStickercolor] = useState(stickerColorData != null ? stickerColorData : []);
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