import React, { useEffect, useState } from "react";
import { useQueryHistory } from "../../hooks/QueryHistoryContext";
import {
  TextField,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import { useSearch } from "../../hooks/SearchContext";
import {
  formStyles,
  noResultsMessage,
  paginationContainer,
  searchBarContainer,
} from "./index.styles";

const ITEMS_PER_PAGE = 10;

const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span
        key={index}
        style={{ backgroundColor: "yellow", fontWeight: "bold" }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
};

const countOccurrences = (text: string, query: string) => {
  if (!query.trim()) return 0;
  const regex = new RegExp(query, "gi");
  return (text.match(regex) || []).length;
};

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { setCurrentQuery, results, currentQuery } = useSearch();
  const { addQueryToHistory } = useQueryHistory();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (currentQuery) {
      setPage(1);
      setSearchQuery(currentQuery);
    }
  }, [currentQuery]);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // setLoading(true);
    setError("");
    setCurrentQuery(searchQuery);
    addQueryToHistory(searchQuery);
    setSearchQuery("");

    setPage(1);
  };

  const handleHistoryClick = (query: string) => {
    setSearchQuery(query);
    setSearchQuery("");
  };

  const totalMatches = results.reduce(
    (count, result) => count + countOccurrences(result.title, currentQuery),
    0
  );

  return (
    <Box sx={searchBarContainer}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
      </form>

      {totalMatches > 0 && (
        <Typography sx={{ marginBottom: 2 }}>
          Found <strong>{totalMatches}</strong> occurrences of "
          <strong>{currentQuery}</strong>"
        </Typography>
      )}

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      {results.length === 0 && currentQuery.trim() && !loading && !error && (
        <Typography sx={noResultsMessage}>
          No results found for "<strong>{currentQuery}</strong>". Try searching
          for something else!
        </Typography>
      )}

      <List>
        {paginatedResults.map((result, index) => (
          <ListItem
            key={index}
            component="a"
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleHistoryClick(result.title)}
          >
            <ListItemText primary={highlightText(result.title, currentQuery)} />
          </ListItem>
        ))}
      </List>

      {results.length > ITEMS_PER_PAGE && (
        <Box sx={paginationContainer}>
          <Button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            Previous
          </Button>
          <Typography>
            Page {page} of {totalPages}
          </Typography>
          <Button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
