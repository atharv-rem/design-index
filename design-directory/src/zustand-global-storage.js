import { create } from 'zustand';

const Zustand_global_storage = create((set) => ({
  results: [],
  hasSearched: false,//this lets me sknow if the user has searched or not
  keywords:[],
  loading: false, // to manage loading state
  sidebar: false,
  setSidebar: (value) => set({ sidebar: value }), 
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })), //allows for toggling of sidebar states
  setLoading: (loading) => set({ loading }), // function to update loading state
  setKeywords: (newKeywords) => set({ keywords: newKeywords }),
  setResults: (newResults) => set({ results: newResults, hasSearched: true}),



}));

export default Zustand_global_storage;
