import React from "react";
import Box from "@mui/material/Box";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "base02",
        height: "40px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="span"
        sx={{
          color: "base01",
          fontSize: "24px",
          fontFamily: "Roboto",
          lineHeight: "40px",
        }}
      >
        Ledger UI
      </Box>
    </Box>
  );
};

export default Header;
