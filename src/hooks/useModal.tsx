'use client';

import { createContext, ReactNode, useContext, useState } from "react";
import { ModalOptions } from "../types/modal.types";

interface ModalContext {
    isOpen: boolean;
    open: (options: ModalOptions) => void;
    close: () => void;
    modalOptions?: ModalOptions;
}

const ModalContext = createContext<ModalContext>({
    isOpen: false,
    open: () => {},
    close: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOptions, setModalOptions] = useState<ModalOptions | undefined>(undefined);

    const open = (options: ModalOptions) => {
        setModalOptions(options);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setModalOptions(undefined);
    };

    return (
        <ModalContext.Provider value={{ isOpen, open, close, modalOptions }}>
            {children}
        </ModalContext.Provider>
    );
}

export const useModalContext = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return ctx;
}