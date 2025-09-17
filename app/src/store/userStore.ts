import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "./types";

interface UserStore {
  isAuthenticated: boolean;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      // user: {
      //   id: '1',
      //   name: 'nigga',
      //   phoneNumber: '+1234567890'
      // },
      setUser: (user) => set({ 
        user, 
        isAuthenticated: !!user 
      }),
      logout: () => set({ 
        user: null, 
        isAuthenticated: false 
      }),
    }),
    {
      name: 'users',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export { useUserStore };

