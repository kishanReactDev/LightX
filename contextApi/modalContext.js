'use client'
import { createContext, useContext, useState } from "react";


export const ModalContext = createContext()

export const ContextProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleClose = () => setIsModalOpen(false)
    const handleOpen = () => setIsModalOpen(true)
    return (
        <ModalContext.Provider value={{ isModalOpen, handleClose, handleOpen }}>
            {children}
        </ModalContext.Provider>
    )
}
export const useModalContext = () => {
    return useContext(ModalContext)
}