import { useState } from 'react';
import ModalBasic from './ModalBasic';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };
    
    return(
        <div className='modal'>
            <button className='modal_add' onClick={showModal}>일정 추가</button>
            {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </div>
    )
}

export default Modal;