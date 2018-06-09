import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from './routes.js';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
};

class Sitebar extends React.Component {

  state = {
    sidebar_open: false
  };

  toggleDrawer = (open) => {
    this.setState({ sidebar_open: open });
  }

  render() {

    const list = (
      <React.Fragment>
        <List style={styles.list} component="nav">
          <ListItem component={Link} to={ROUTES.POKEMON_LIST.URL} button>
            <ListItemText primary="Pokemon" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Moves" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Types" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Abilities" />
          </ListItem>
        </List>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <Drawer open={this.state.sidebar_open} onClose={() => { this.toggleDrawer(false) }}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => { this.toggleDrawer(false) }}
            onKeyDown={() => { this.toggleDrawer(false) }}
          >
            {list}
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => { this.toggleDrawer(true) }} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Pokeviewer
            </Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Sitebar);