import React from "react";
import './Color_revise.css';
import { ColorConsumer } from './Color';

const colors = ['red','orange','yellow','green','blue','indigo','violet'];

function Color_revise(){
   
       return(
            <div className="color_layer">
                <h3>메모지 색상</h3>
                <ColorConsumer>
                {({actions})=>(
                    <div style={{display:'flex'}}>
                        {colors.map(color=>(
                            <div
                                key = {color}
                                style = {{
                                    background:color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer',
                                }}

                                onContextMenu={(e) => { // 오른쪽버튼클릭시
                                    e.preventDefault();
                                    actions.setColor(color)
                                }
                                }
                            />
                        ))}
                    </div>
                )}
             </ColorConsumer>



            </div>
       )}

export default Color_revise;