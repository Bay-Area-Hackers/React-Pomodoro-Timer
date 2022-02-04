
import ReactModal from 'react-modal';
import { useState } from 'react';
import "./Modal.css";


type Props = {
    isYes: boolean
    children: JSX.Element
    showModal: boolean
    setShowModal: (showModal: boolean) => void
  }

const Modal: React.FC<Props> = ({isYes, children, showModal, setShowModal})　=> {
    // const [showModal, setShowModal] = useState(isYes);

    const openHandleModal = () => {
        setShowModal(true);
    }
    const closeHandleModal = () => {
        setShowModal(false);
    }

    return (
        <div>
            <ReactModal 
               isOpen={showModal}
               onRequestClose={closeHandleModal}
               shouldCloseOnOverlayClick={true}
               closeTimeoutMS={500}
               contentLabel="My dialog"
               className="mymodal"
               overlayClassName="myoverlay"
            >
                <button onClick={closeHandleModal} type="button" className="close-button" 
                 aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {children}
            </ReactModal>
        </div>
    );
};

export default Modal;