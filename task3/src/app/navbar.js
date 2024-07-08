"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import InsightsIcon from "@mui/icons-material/Insights";
import PaletteIcon from "@mui/icons-material/Palette";
import AddIcon from "@mui/icons-material/Add";
import SpeedIcon from "@mui/icons-material/Speed";

const pages = [
  { icon: <HomeIcon />, name: "Patients" },
  { icon: <ListIcon />, name: "Repertory" },
  { icon: <InsightsIcon />, name: "Tempran Insights" },
  { icon: <PaletteIcon />, name: "Themes" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* LOGO */}
            <img src="data:image/jpeg;base64,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" width="150" height="150" alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  {page.icon}
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {page.icon}
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Tooltip title="Speed Case">
              <IconButton sx={{ color: "white" }}>
                <SpeedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add">
              <IconButton sx={{ color: "white" }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
