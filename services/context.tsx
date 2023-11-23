import { create } from "zustand";

type UserState = {
  user: {
    email: string;
    name: string;
    firstTime: boolean;
    publications: {
      id: number;
      title: string;
      publisher: string;
      vacantes: number;
      aspirantes: number;
      experiencia: string;
      modalidad: string;
    }[];
  };
  setUser: (user: UserState["user"]) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
export default useUserStore;
