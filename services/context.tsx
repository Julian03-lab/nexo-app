import { create } from "zustand";
import { publications } from "../assets/info/jobsList";

type UserState = {
  user: {
    email: string;
    name: string;
    firstTime: boolean;
    publications: publications[];
  };
  setUser: (user: UserState["user"]) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
export default useUserStore;
