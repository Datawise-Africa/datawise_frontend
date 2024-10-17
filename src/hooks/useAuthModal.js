import { create } from "zustand";

const useAuthModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false })
}));

export default useAuthModal;