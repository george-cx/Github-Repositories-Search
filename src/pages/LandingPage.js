import React from 'react';
import { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import debounce from 'lodash.debounce';
import ListItem from '../comoponents/ListItem';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useLocation } from 'react-router-dom';
import {
  TextField,
  Container,
  List,
  CircularProgress,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';

function LandingPage() {
  const [isActive, setActive] = useState('false');
  const { repos, setInputValue, loading, setLoading, error, inputValue } =
    useContext(AppContext);
  const handleSearch = debounce((searchValue) => {
    setInputValue(searchValue);
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, 1000);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const search = useLocation().search;
  const q = new URLSearchParams(search).get('q');
  return (
    <>
      {q && setInputValue(q)}
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={11} sm={11} md={11}>
            <TextField
              style={{ marginTop: '10px' }}
              id="outlined-basic"
              label="Type here"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Repositories"
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1} alignSelf="center">
            {!isActive ? (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ padding: '0', margin: '0' }}
                onClick={handleToggle}
              >
                <GridViewIcon sx={{ fontSize: '37px' }} />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ padding: '0', margin: '0' }}
                onClick={handleToggle}
              >
                <FormatListBulletedIcon sx={{ fontSize: '37px' }} />
              </IconButton>
            )}
          </Grid>
        </Grid>

        {loading && (
          <CircularProgress style={{ marginLeft: '47%', marginTop: '15px' }} />
        )}
        {error && <h1>{error}</h1>}
        {!error && (
          <List
            className={isActive ? 'grid' : null}
            sx={{ width: '100%', bgcolor: 'background.paper' }}
          >
            {repos.map((item) => (
              <ListItem
                isActive={isActive}
                key={item.node_id}
                id={item.id}
                name={item.name}
                username={item.owner.login}
                description={item.description}
                img={item.owner.avatar_url}
              />
            ))}
          </List>
        )}
        {inputValue && !loading && !repos.length && (
          <Typography>No Repos Matched with - "{inputValue}"</Typography>
        )}
      </Container>
    </>
  );
}

export default LandingPage;
