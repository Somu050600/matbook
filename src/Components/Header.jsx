import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logo from '../assets/Logo.svg';

const pages = ['About', "Products", 'Technology', 'Contact Us'];
const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElProd, setAnchorElProd] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProdMenu = (event) => {
    anchorElProd ? setAnchorElProd(null) :  setAnchorElProd(event.currentTarget);
  };

  const handleCloseProdMenu = () => {
    setAnchorElProd(null);
  };

  return (
    <AppBar position="static" sx={{ boxShadow: 0, backgroundColor: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
                <img src={Logo} alt="Logo" width={40} />
            </IconButton>
            <Typography variant="h5" sx={{ flex: 1, color: '#CF6837', fontSize: 32, fontWeight: 600 }}>
                MATBOOK
            </Typography>
        </div>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (page !== "Products" ? (
                <Button key={page} sx={{ m: 1, color: '#555353', display: 'block', textTransform: 'none', fontSize: 18 }} >
                {page}
                </Button>
            ):(
            <Button 
                onClick={handleOpenProdMenu}    
                sx={{ my: 2, color: '#555353', textTransform: 'none', fontSize: 18 }} 
                endIcon={<KeyboardArrowDownIcon />}
                >
                Products 
                <Menu
                    anchorEl={anchorElProd}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElProd)}
                    onClose={handleCloseProdMenu}
                >
                    {products.map((product) => (
                    <MenuItem key={product} onClick={handleCloseProdMenu}>
                        {product}
                    </MenuItem>
                    ))}
                </Menu>
            </Button>)))}
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                ))}
            </Menu>
        </Box>
        <Button
            variant="contained"
            sx={{
                bgcolor: '#CF6837',
                boxShadow: 0,
                borderRadius: 4,
                py: 1,
                px: 2,
                textTransform: 'none',
                display: { xs: 'none', md: 'flex' },
            }}
            endIcon={<ArrowOutwardIcon sx={{ fontSize: 'small' }} />}
        >
          Get An Estimate
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
