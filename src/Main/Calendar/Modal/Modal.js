import { useState } from 'react';
import ModalBasic from './ModalBasic';

function Modal() {
    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        setModalOpen(true);
    };

    return(
            <div className='modal'>
                <button onClick={showModal}>일정 추가</button>
                <div className='bg_black'>
                {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
                </div>
            </div>
    )
}

export default Modal;