import { create } from 'zustand';

type HeaderStoreType = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
};

const useHeaderStore = create<HeaderStoreType>((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
}));

export default useHeaderStore;
