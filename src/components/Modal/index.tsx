import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import ReactModal from 'react-modal';


interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  // FiX

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={setIsOpen}
        className="react-modal-close"
      >
        <FiX size={30} />
      </button>
      {children}
    </ReactModal>
  );
};

export default Modal;
