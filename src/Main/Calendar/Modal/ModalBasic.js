import { useEffect, useRef } from "react";
import "./Modal.css";

function ModalBasic({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = () => {
            if(modalRef.current && !modalRef.current.contains()){
                setModalOpen(false);
            }
        }
        document.addEventListener('mousedown',handler);

        return() => {
            document.removeEventListener('mousedown',handler);
        }
    })

    return(
        <div className="container">
            <button className="close" onClick={closeModal}>X</button>
            <p>모달</p>
        </div>
    )
}

export default ModalBasic;