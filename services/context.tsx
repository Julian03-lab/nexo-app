import { create } from "zustand";
import { publications } from "../assets/info/jobsList";

type UserState = {
  user: {
    email: string;
    name: string;
    publications: publications[];
    trash: {
      id: number;
      job: string;
      email: string;
      date: string;
      type: string;
    }[];
  };
  setUser: (user: UserState["user"]) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
export default useUserStore;
