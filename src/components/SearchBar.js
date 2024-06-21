import React, { useState } from "react";
import { TextField, Button, Grid, Box, Typography } from "@mui/material";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchDrugs, setSearchDrugs] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=${searchDrugs}&limit=10`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.results) {
        onSearch(data.results);
      } else {
        onSearch([]);
      }
    } catch (error) {
      console.error("Error searching drugs:", error);
      onSearch([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box className="search-bar">
      <Typography variant="h4" component="h1" sx={{ color: '#1900a9', textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>
        Open FDA Drugs
      </Typography>
      <Grid container spacing={10} alignItems="center">
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="Buscar medicamento"
            variant="outlined"
            value={searchDrugs}
            onChange={(e) => setSearchDrugs(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item xs={3}>
          <Button className="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
