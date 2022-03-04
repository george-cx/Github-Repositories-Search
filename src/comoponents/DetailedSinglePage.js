import { Container, Avatar, Grid, Paper, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import ForkRightSharpIcon from '@mui/icons-material/ForkRightSharp';
import LockClockSharpIcon from '@mui/icons-material/LockClockSharp';
import RemoveRedEyeSharpIcon from '@mui/icons-material/RemoveRedEyeSharp';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function DetailedSinglePage({
  img,
  owner,
  repoName,
  branch,
  description,
  forks,
  watchers,
  visibility,
  url,
  date,
}) {
  return (
    <Container maxWidth="lg">
      <Avatar
        alt="Owners Aavatar"
        src={img}
        sx={{
          mx: 'auto',
          height: 200,
          width: 200,
        }}
      />
      <Item style={{ marginTop: '20px', fontSize: '17px' }}>
        <Box component="span" sx={{ fontWeight: '600', color: '#262147' }}>
          Repository Owner
        </Box>
        - {owner}
      </Item>
      <Item style={{ fontSize: '17px' }}>
        <Box component="span" sx={{ fontWeight: '600', color: '#262147' }}>
          Repository Name
        </Box>
        - {repoName}
      </Item>
      <Item style={{ fontSize: '17px' }}>
        <Box component="span" sx={{ fontWeight: '600', color: '#262147' }}>
          Upload Date
        </Box>
        - {date}
      </Item>
      <Item style={{ fontSize: '17px' }}>
        <Box component="span" sx={{ fontWeight: '600', color: '#262147' }}>
          Repo Description
        </Box>
        - {description}
      </Item>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Item style={{ fontSize: '22px', fontWeight: '500' }}>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LocationOnTwoToneIcon />
            </IconButton>
            Branch : {branch}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item style={{ fontSize: '22px', fontWeight: '500' }}>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ForkRightSharpIcon />
            </IconButton>
            Forks : {forks}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item style={{ fontSize: '22px', fontWeight: '500' }}>
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LockClockSharpIcon />
            </IconButton>
            Visibility : {visibility}
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item style={{ fontSize: '22px', fontWeight: '500' }}>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <RemoveRedEyeSharpIcon />
            </IconButton>
            Watchers : {watchers}
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default DetailedSinglePage;
