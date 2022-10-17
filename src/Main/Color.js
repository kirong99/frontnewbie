// /context/color.js
import React, { createContext, useCallback, useState } from 'react';

// Context에는 value에는 상태 값이 아닌 함수도 전달할 수 있다.

// state에 기본 설정값
// actions에 함수
const ColorContext = createContext({
    state : { color : 'white'},
    actions : {
        setColor : () => {},
    },
});

const ColorProvider = ({children}) => {
    
    const [color, setColor] = useState('white');

    // value는 큰 상자와 작은 상자바꾸는 hooks다.
    const value = {
        state : { color},
        actions : { setColor},
    };

    return (
        // 이렇게 하면서 ColorContext.Provider 대신 ColorProvider로 사용 가능
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );

};
// const ColorConsumer = ColorContext.Consumer
// Consumer 쓸 때 ColorContext.Consumer를 colorConsumer로 대체 가능하다.
const { Consumer : ColorConsumer } = ColorContext;

// ColorProvider는 ColorContext.Provider를 반환하면서 ,
// ColorConsumer는 const { Consumer: ColorConsumer } = ColorContext;를 통해서 사용 가능
export { ColorProvider, ColorConsumer };

export default ColorContext;