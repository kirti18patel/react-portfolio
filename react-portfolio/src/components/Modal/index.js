import React from 'react';

const Modal = ({ onClose }) => {
    // const {name, category, description, index} = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">Project</h3>
          <button className="modal-close-btn" onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;