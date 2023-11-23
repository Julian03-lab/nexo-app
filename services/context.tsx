import { create } from "zustand";

type UserState = {
  user: {
    email: string;
    name: string;
    firstTime: boolean;
  };
  setUser: (user: UserState["user"]) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
export default useUserStore;
