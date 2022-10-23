import React, { createContext, useCallback, useState } from 'react';

const ColorContext = createContext({
    state : { color : 'inherit', postcolor : 'inherit'},
    actions : {
        setColor : () => {},
        setPostcolor : () => {},
    },
});

const ColorProvider = ({children}) => {
    
    const [color, setColor] = useState('white');
    const [postcolor, setPostcolor] = useState('yellow');
    const value = {
        state : { color, postcolor },
        actions : { setColor, setPostcolor },
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );

};

const { Consumer : ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;