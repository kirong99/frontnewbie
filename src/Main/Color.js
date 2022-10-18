import React, { createContext, useCallback, useState } from 'react';

const ColorContext = createContext({
    state : { color : 'inherit'},
    actions : {
        setColor : () => {},
    },
});

const ColorProvider = ({children}) => {
    
    const [color, setColor] = useState('white');
    const value = {
        state : { color },
        actions : { setColor },
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );

};

const { Consumer : ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;