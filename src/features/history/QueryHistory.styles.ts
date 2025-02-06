export const drawerStyles = {
  width: "60px",
  transition: "width 0.3s ease-in-out",
  overflowX: "hidden",
  backgroundColor: "#ffffff",
  boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "0px 10px 10px 0px",
  "&:hover": {
    width: "250px",
  },
};

export const historyContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
  padding: "10px",
  backgroundColor: "#ffffff",
};

export const iconButtonStyles = {
  color: "#333",
  fontSize: "32px",
  marginBottom: "10px",
};

export const listStyles = {
  width: "100%",
  padding: 0,
};

export const listItemStyles = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  transition: "background 0.2s ease",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
};

export const clearButtonStyles = {
  marginTop: "auto",
  backgroundColor: "#ff4d4d",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e63939",
  },
};

export const typographyStiles = {
  display: "none",
  "&:hover": {
    display: "block",
  },
};
