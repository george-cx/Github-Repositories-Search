import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
      position="sticky"
      style={{ marginBottom: '50px', alignItems: 'center' }}
    >
      <Toolbar variant="dense">
        <Link to="/">
          <IconButton
            edge="start"
            color="warning"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <GitHubIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" color="inherit" component="div">
          Github Repository Search App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
