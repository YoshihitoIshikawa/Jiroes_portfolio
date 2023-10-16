import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  const [searchTerm, setSearchTerm] = useState('');

  // const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSearch = async () => {
    // setLoading(true);
    try {
      router.push(`/search?keyword=${searchTerm}`);
    } catch (error) {
      console.error('検索エラー:', error);
    }
    // setLoading(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link href={"/profile"}>マイページ</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link href={"/shops"}>店舗一覧</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link href={"/shops/new"}>新規店舗登録</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><p onClick={() => logout()}>ログアウト</p></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link href={"/profile"}>マイページ</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link href={"/shops"}>店舗一覧</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link href={"/shops/new"}>新規店舗登録</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><p onClick={() => logout()}>ログアウト</p></MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='bg-zinc-800'>
        <Toolbar>
          <RamenDiningIcon className='mr-2'/>
          <Typography
            variant="h6"
            className='mr-3 font-black'
            component="div"
            sx={{ display: {sm: 'block' } }}
          >
            <Link href="/">JIROES</Link>
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="店名・エリア検索"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <SearchIcon className='cursor-pointer' onClick={handleSearch}/>
          <Box sx={{ flexGrow: 1 }} />
          { isAuthenticated ?
            <>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
            </Box>
          </> :
          <div className='flex items-center'>
            <div>
              <p className="cursor-pointer text-xs md:text-base whitespace-nowrap" onClick={() => loginWithRedirect()}>ログイン</p>
            </div>
          </div>
          }
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
