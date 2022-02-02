
import ReactModal from 'react-modal';
import { useState } from 'react';
import "./Modal.css";

type Props = {
    isTrue: boolean
    // children: JSX.Element
  }

const Modal: React.FC<Props> = ({isTrue, children})　=> {
    const [showModal, setShowModal] = useState(isTrue);


    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <ReactModal 
               isOpen={showModal}
               onRequestClose={handleCloseModal}
               shouldCloseOnOverlayClick={true}
               closeTimeoutMS={500}
               contentLabel="My dialog"
               className="mymodal"
               overlayClassName="myoverlay"
            >
                <button onClick={handleCloseModal} type="button" className="close-button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {children}
            </ReactModal>
        </div>
    );
};

export default Modal;