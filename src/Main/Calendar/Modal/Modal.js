import { useState,useRef } from 'react';
import ModalBasic from './ModalBasic';
import DataList from '../DataList';
import Event from '../events';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    const [data,setDate] = useState([]);

    const dataId = useRef(0);

    const onCreate = (title) => {
      const date = '2022-10-26'
      const newItem = {
        title,
        date,
        id: dataId.current
      }
      dataId.current += 1;
      setDate([newItem , ...data])
      console.log(data);
  }
    
    return(
        <div className='modal'>
            <button className='modal_add' onClick={showModal}>일정 추가</button>
            {modalOpen && <ModalBasic onCreate={onCreate} setModalOpen={setModalOpen} />}
            <DataList dataList={data} />
            {/* <Event dataList={data} /> */}
        </div>
    )
}

export default Modal;