import React, { useState } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQueryHistory } from "../../hooks/QueryHistoryContext";
import { useSearch } from "../../hooks/SearchContext";
import {
  clearButtonStyles,
  drawerStyles,
  historyContainer,
  iconButtonStyles,
  listItemStyles,
  listStyles,
  typographyStiles,
} from "./QueryHistory.styles";
import HistoryIcon from "@mui/icons-material/History";

const QueryHistory: React.FC = () => {
  const { history, clearHistory } = useQueryHistory();
  const { setCurrentQuery } = useSearch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHistoryClick = (query: string) => {
    setCurrentQuery(query);
  };

  const handleSidebarEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarLeave = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={drawerStyles}
      onMouseEnter={handleSidebarEnter}
      onMouseLeave={handleSidebarLeave}
    >
      <Box sx={historyContainer}>
        <IconButton sx={iconButtonStyles}>
          <HistoryIcon fontSize="large" />
        </IconButton>

        {isSidebarOpen && (
          <>
            <Typography variant="h6" sx={typographyStiles}>
              Search History
            </Typography>

            <List sx={listStyles}>
              {history.map((query, index) => (
                <ListItem
                  key={index}
                  component={"button"}
                  onClick={() => handleHistoryClick(query)}
                  sx={listItemStyles}
                >
                  <ListItemText primary={query} />
                </ListItem>
              ))}
            </List>

            {history.length > 0 && (
              <Button
                variant="contained"
                sx={clearButtonStyles}
                onClick={clearHistory}
              >
                {" "}
                Clear History
              </Button>
            )}
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default QueryHistory;
