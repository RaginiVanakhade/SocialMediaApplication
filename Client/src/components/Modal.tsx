// import React from "react";
import type { ReactNode } from "react";
import "../Style/Modal.css";

interface ModalProps {
  isModelOpen: boolean;
  setIsModelOpen: (value: boolean) => void;
  children?: ReactNode;
}

const Modal = ({ isModelOpen, setIsModelOpen, children }: ModalProps) => {
  if (!isModelOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setIsModelOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsModelOpen(false)}>
          &times; 
        </button>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
