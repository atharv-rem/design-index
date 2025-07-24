import { create } from 'zustand';

const Zustand_global_storage = create((set) => ({
  results: [],
  has_opened_about_section:false, //this lets me know if the user has opened the about section or not
  has_opened_privacy_section: false, //this lets me know if the user has opened the privacy section or not
  has_opened_terms_section: false, //this lets me know if the user has opened the terms section or not
  has_opened_homepage: false, //this lets me know if the user has opened the homepage or not
  setHasOpenedAboutSection: (value) => set({ has_opened_about_section: value }),
  setHasOpenedPrivacySection: (value) => set({ has_opened_privacy_section: value }),
  setHasOpenedTermsSection: (value) => set({ has_opened_terms_section: value }),
  setHasOpenedHomepage: (value) => set({ has_opened_homepage: value }),

  hasSearched: false,//this lets me sknow if the user has searched or not
  keywords:[],
  setKeywords: (newKeywords) => set({ keywords: newKeywords }),
  setResults: (newResults) => set({ results: newResults, hasSearched: true}),
}));

export default Zustand_global_storage;
