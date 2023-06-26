import React from 'react';

const ConfirmationModal = ({title, message, closeModal,successDeleteButton, successAction, modalData}) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                    <label onClick={() => successAction(modalData)} htmlFor="confirmationModal" className="btn btn-info">{successDeleteButton}</label>
                    <button onClick={closeModal} className='btn btn-outline'>chancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;