'use client';

import { useModalContext } from "../hooks/useModal";
import { Modalsize } from "../types/modal.types";

const sizeClasses: Record<Modalsize, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
};

const Modal = () => {
    const { isOpen, modalOptions, close } = useModalContext();

    if (!isOpen || !modalOptions) {
        return null;
    }

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
            <div className={`bg-white rounded-lg shadow-lg p-4 ${sizeClasses[modalOptions.size || 'md']}`}>
                <div className="flex justify-between items-center">
                    {modalOptions.header && <h2>{modalOptions.header}</h2>}
                    <button onClick={close} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div className="mt-2">
                    {modalOptions.body}
                </div>
                {modalOptions.footer && (
                    <div className="mt-4">
                        {modalOptions.footer}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal;