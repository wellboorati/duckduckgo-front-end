import SearchBar from "./features/search";
import { QueryHistoryProvider } from "./hooks/QueryHistoryContext";
import QueryHistory from "./features/history/QueryHistory";
import { SearchProvider } from "./hooks/SearchContext";
import { Box, Typography } from "@mui/material";
import {
  appContainer,
  cardStyle,
  subtitleStyle,
  titleStyle,
} from "./App.styles";

function App() {
  return (
    <Box sx={appContainer}>
      <Box sx={cardStyle}>
        <Typography sx={titleStyle}>DuckDuckGo Search</Typography>
        <Typography sx={subtitleStyle}>
          A minimalist, elegant search interface
        </Typography>
        <SearchProvider>
          <QueryHistoryProvider>
            <SearchBar />
            <QueryHistory />
          </QueryHistoryProvider>
        </SearchProvider>
      </Box>
    </Box>
  );
}

export default App;
