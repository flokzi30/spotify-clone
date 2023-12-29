import { create } from "zustand";

interface PlayerStore {

    id: string[];
    activeId?: string;
    setId: (id: string) => void;
    setIds: (ids: string[]) => void;
    reset: () => void;
};

const usePlayer = create<PlayerStore>(set => ({
    id: [],
    activeId: undefined,
    setId: (id: string) => set({ activeId: id }),
    setIds: (ids: string[]) => set({ id: ids }),
    reset: () => set({ activeId: undefined, id: [] })
}));

export default usePlayer;