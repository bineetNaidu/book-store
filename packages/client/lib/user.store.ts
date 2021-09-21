import create from 'zustand';
import { User } from '../generated/graphql';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) =>
    set(() => ({
      user,
    })),
  logout: () =>
    set(() => ({
      user: null,
    })),
}));
