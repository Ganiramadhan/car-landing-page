import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    <FaTimes />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
