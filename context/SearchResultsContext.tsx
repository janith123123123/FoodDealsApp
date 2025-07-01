import React, { createContext, useContext, useState } from 'react';
import { Deal } from '../context/DealsContext';

type SearchContextType = {
  results: Deal[];
  setResults: (deals: Deal[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [results, setResults] = useState<Deal[]>([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchResults = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchResults must be used within a SearchProvider");
  }
  return context;
};
