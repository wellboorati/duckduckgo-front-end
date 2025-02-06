import { SxProps, Theme } from "@mui/material";

export const searchBarContainer: SxProps<Theme> = {
  maxWidth: 600,
  margin: "auto",
  padding: 2,
};

export const formStyles: React.CSSProperties = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

export const noResultsMessage: SxProps<Theme> = {
  textAlign: "center",
  marginTop: 2,
  padding: 2,
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  fontSize: "1.1rem",
  color: "#555",
};

export const paginationContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 2,
};
