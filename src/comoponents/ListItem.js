import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemAvatar,
  Typography,
  ListItemText,
  Avatar,
  Divider,
} from '@mui/material';
function SingleItem({ name, username, description, id, img, isActive }) {
  return (
    <Link to={`repo/${id}`}>
      <ListItem>
        <ListItemAvatar className={isActive ? 'gridItem avatar' : null}>
          <Avatar alt="Remy Sharp" src={img} />
        </ListItemAvatar>
        <ListItemText
          className={isActive ? 'gridItem ' : null}
          primary={<Typography>Repository Name - {name}</Typography>}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Username : {username}
              </Typography>
              <br />
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Description - {description}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Link>
  );
}

export default SingleItem;

// <li
//   style={{
//     border: '2px solid darkGreen',
//     marginBottom: '5px',
//     display: 'flex',
//   }}
// >
//   <p> Repository name : {name} ,</p>
//   <p> Repository author : {username} ,</p>
//   <p> Repository description : {description} </p>
// </li>
