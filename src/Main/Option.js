import '../main.css';
import React, { useState } from "react";
import { ColorProvider } from './Color';
import Color_revise from './Color_revise';

function Option() {
    const [color, setColor] = useState(false);

    return (
        <div>
            <div className="option_layout">
                <button className="revise">내용 수정하기</button>
                {/* <button className="color_revise"
                    onClick={() => {
                        setColor(!color);
                    }}
                >색상 초기화하기</button> */}
            </div>
            {color && <Color_revise />}
        </div>
    )


}


export default Option;