import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="l">
      <Toolbar>
          <Typography variant="h5" component="p" sx={{ ml: 9 }}>
            Car Loan Calculator
          </Typography>
        </Toolbar>
      </Container>

    </AppBar>
  )
}
