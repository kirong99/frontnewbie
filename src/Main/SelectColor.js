import React from 'react';
import { ColorConsumer } from './Color';

const colors = ['#ffafaf','#ffb762','#fefeb2','#c0e7b7','#b5c7ef','#d7f2ff','#dfd4e3', 'white'];
/** 블랙 색 : '#5d5e61'**/


const SelectColors = () => {
    return (
        <div>
            <ColorConsumer>
                {({actions})=>(
                    <div style={{display:'flex'}}>
                        {colors && colors.map(color=>(
                            <div
                                key = {color}
                                style = {{
                                    background:color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                    margin: '10px 5px 0 0',
                                    border: '1px solid #eee',
                                }}
                                onClick={()=>actions.setColor(color)} // 왼쪽버튼클릭시
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            {/* <button class="color_save">저장</button> */}
        </div>
    )
}

export default SelectColors

