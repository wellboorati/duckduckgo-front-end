import React, { createContext, useContext, useEffect, useState } from "react";
import ApiDuckDuckGo from "../services/ApiDuckDuckGo";

interface SearchContextType {
  currentQuery: string;
  results: { title: string; url: string }[];
  setCurrentQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentQuery, setCurrentQuery] = useState<string>("");
  const [results, setResults] = useState<{ title: string; url: string }[]>([]);

  useEffect(() => {
    if (!currentQuery.trim()) return;

    const fetchSearchResults = async () => {
      try {
        const { data } = await ApiDuckDuckGo.get(`/search?q=${currentQuery}`);
        setResults(data);
      } catch (err) {
        console.error("Error fetching search results", err);
      }
    };

    fetchSearchResults();
  }, [currentQuery]);

  return (
    <SearchContext.Provider value={{ currentQuery, results, setCurrentQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
