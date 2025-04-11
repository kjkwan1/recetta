import { ReactNode } from "react";

export type Modalsize = 'sm' | 'md' | 'lg';

export interface ModalContent {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

export interface ModalOptions extends ModalContent {
    size?: Modalsize;
}