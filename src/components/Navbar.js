import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config'
import { getAuth } from 'firebase/auth'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box } from '@mui/system'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import HouseIcon from '@mui/icons-material/House'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'

const pages = ['accueil', 'shop', 'loisirs', 'traiteur', 'planning', 'contact']
const cart = "cart"

export default function Navbar() {
    const {toggleModals} = useContext(UserContext)
    const navigate = useNavigate()
    const logOut = async () => {
        try {
            await signOut(auth)
            navigate("/")
        }catch {
            alert("Pour une raison inconnue, nous ne pouvons vous déconnecter, vérifiez votre connexion internet et réessayez")
        }
    }

    
    const authent = getAuth()
    onAuthStateChanged(authent, (user) => {
        if(user) {
            document.getElementById('signup').style.display = "none"
            document.getElementById('signin').style.display = "none"
            document.getElementById('cart').style.display = "block"
            document.getElementById('logout').style.display = "block"
        } else {
            document.getElementById('logout').style.display = "none"
            document.getElementById('cart').style.display = "none"
            document.getElementById('signup').style.display = "block"
            document.getElementById('signin').style.display = "block"
        }
    })
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  function handleLinkMenu(page) {
    navigate(`/private/${page}`)
    handleCloseNavMenu()
  }

  function handleCartClick(cart) {
    navigate(`/private/${cart}`)
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#3D3D3D" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <HouseIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    WELCHOME
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={() => handleLinkMenu(page)}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <HouseIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    WELCHOME29
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', gap: '25px'} }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={() => handleLinkMenu(page)}
                            sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px'  }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', gap: "16px" }}}>
                    <Button 
                        variant='outlined' 
                        sx={{ 
                            color: "white", 
                            borderColor: "white" ,
                            "&:hover": {
                                borderColor: "#009172",
                            }
                        }}
                        onClick={() => toggleModals("signUp")}
                        id='signup'
                    >
                        Inscription
                    </Button>
                    <Button 
                        variant='outlined' 
                        sx={{ 
                            color: "white", 
                            borderColor: "white" ,
                            "&:hover": {
                                borderColor: "#009172",
                            }
                        }}
                        onClick={() => toggleModals("signIn")}
                        id='signin'
                    >
                        Connexion
                    </Button>
                    <ShoppingCartIcon 
                        sx={{ 
                            alignSelf: "center" 
                        }}
                        id='cart'
                        key={cart}
                        onClick={() => handleCartClick(cart)}
                        style={{cursor: "pointer"}}
                    />
                    <Button 
                        variant='outlined' 
                        sx={{ 
                            color: "white", 
                            borderColor: "white" ,
                            "&:hover": {
                                borderColor: "red",
                            }
                        }}
                        onClick={logOut}
                        id='logout'
                    >
                        Déconnexion
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
