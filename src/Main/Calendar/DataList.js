import { useState } from "react";
import DataItem from "./DataItem";
import events from "./events";

const DataList = ({ dataList }) => {
    console.log(dataList)
    return (
        <div className="DataList">
            <h2>리스트</h2>
            <div className="DataItemBox">
                {dataList.map((it,idx)=>(
                    <events key={idx} {...it}/>
                ))}
            </div>
        </div>
    )
}



export default DataList;