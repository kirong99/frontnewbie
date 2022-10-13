import '../main.css';
import ColorRevise from './Color_revise';
import React, { useState } from "react";

function Option() {
    const [color, setColor] = useState(false);

    return (
        <div>
            <div className="option_layout">
                <button className="revise">내용 수정하기</button>
                <button className="color_revise"
                    onClick={() => {
                        setColor(!color);
                    }}
                >색상 수정하기</button>
            </div>
            {color && <ColorRevise />}
        </div>
    )


}


export default Option;