import create from 'zustand';

interface ProjectState {
  selectedProjectId: number | null;
  setSelectedProjectId: (id: number | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  selectedProjectId: null,
  setSelectedProjectId: (id) => set({ selectedProjectId: id }),
}));
