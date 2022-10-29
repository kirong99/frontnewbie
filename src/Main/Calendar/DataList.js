import { useState } from "react";
import DataItem from "./DataItem";
import Events from "./Events";

const DataList = ({ dataList }) => {
    console.log(dataList)
    



                {dataList.map((it,idx)=>(
                    <Events key={idx} {...it}/>
                ))}
 
    
}



export default DataList;