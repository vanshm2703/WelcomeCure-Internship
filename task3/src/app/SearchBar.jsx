// components/SearchBar.js
"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function SearchBar() {
  const [searchData, setSearchData] = useState({
    registrationId: '',
    firstName: '',
    lastName: '',
    others: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching with:', searchData);
  };

  const handleClear = () => {
    setSearchData({
      registrationId: '',
      firstName: '',
      lastName: '',
      others: ''
    });
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Registration ID"
            name="registrationId"
            value={searchData.registrationId}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="First Name"
            name="firstName"
            value={searchData.firstName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Last Name"
            name="lastName"
            value={searchData.lastName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            label="Others"
            name="others"
            value={searchData.others}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClear}
            fullWidth
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchBar;
