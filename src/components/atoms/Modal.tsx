
import ReactModal from 'react-modal';
import { useState } from 'react';
import "./Modal.css";


type Props = {
    isYes: boolean
    children: JSX.Element
  }

const Modal: React.FC<Props> = ({isYes, children})　=> {
    const [showModal, setShowModal] = useState(isYes);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <ReactModal 
               isOpen={showModal}
               onRequestClose={handleModal}
               shouldCloseOnOverlayClick={true}
               closeTimeoutMS={500}
               contentLabel="My dialog"
               className="mymodal"
               overlayClassName="myoverlay"
            >
                <button onClick={handleModal} type="button" className="close-button" 
                 aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {children}
            </ReactModal>
        </div>
    );
};

export default Modal;