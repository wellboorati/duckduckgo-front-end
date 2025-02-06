import React, { createContext, useContext, useEffect, useState } from "react";
import ApiDuckDuckGo from "../services/ApiDuckDuckGo";

interface QueryHistoryContextType {
  history: string[];
  fetchHistory: () => void;
  addQueryToHistory: (query: string) => void;
  clearHistory: () => void;
}

const QueryHistoryContext = createContext<QueryHistoryContextType | undefined>(
  undefined
);

export const QueryHistoryProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [history, setHistory] = useState<string[]>([]);

  const fetchHistory = async () => {
    try {
      const { data } = await ApiDuckDuckGo.get("/search/history");
      setHistory(data);
    } catch (err) {
      console.error("Error fetching search history", err);
    }
  };

  const addQueryToHistory = (query: string) => {
    setHistory((prevHistory) => {
      const updatedHistory = [query, ...prevHistory];
      return updatedHistory;
    });
  };

  const clearHistory = async () => {
    try {
      await ApiDuckDuckGo.post("/search/clear-history");
      setHistory([]);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <QueryHistoryContext.Provider
      value={{ history, fetchHistory, addQueryToHistory, clearHistory }}
    >
      {children}
    </QueryHistoryContext.Provider>
  );
};

export const useQueryHistory = () => {
  const context = useContext(QueryHistoryContext);
  if (!context) {
    throw new Error(
      "useQueryHistory must be used within a QueryHistoryProvider"
    );
  }
  return context;
};
