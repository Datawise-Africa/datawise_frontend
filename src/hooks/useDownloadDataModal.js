import { create } from "zustand";

const useDownloadDataModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true}),
    close: () => set({ isOpen: false })
}));

export default useDownloadDataModal;