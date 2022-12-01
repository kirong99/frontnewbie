import React from 'react';
import { ColorConsumer } from './Color';

const colors = ['#ffafaf','#ffb762','#fefeb2','#c0e7b7','#b5c7ef','#d7f2ff','#dfd4e3', 'white'];
/** 블랙 색 : '#5d5e61'**/

const SelectPostColors = () => {
    return (
        <div>
            <ColorConsumer>
                {({actions})=>(
                    <div style={{display:'flex'}}>
                        {colors && colors.map(postcolor=>(
                            <div
                                key = {postcolor}
                                style = {{
                                    background:postcolor,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                    margin: '10px 5px 0 0',
                                    border: '1px solid #eee',
                                }}
                                onClick={()=>actions.setPostcolor(postcolor)} // 왼쪽버튼클릭시
                                onContextMenu={(e) => { // 오른쪽버튼클릭시
                                    e.preventDefault();
                                    actions.setStickercolor(postcolor)
                                }
                                }
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <p className='color-alert' style={{fontSize:"10px", textAlign:"center", marginTop:"10px"}}>색상에 마우스 오른쪽 버튼을 클릭해보세요!</p>
            {/* <button class="color_save">저장</button> */}
        </div>
    )
}

export default SelectPostColors

