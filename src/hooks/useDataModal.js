import { create } from "zustand";

const useDataModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false })
}));

export default useDataModal;