import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: 70
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar>
            <Toolbar>
            <Typography align="left" variant="h6" className={classes.title}>
                Contact Manager
            </Typography>
            <IconButton color="inherit">
              <Link to="/">
                <Icon>home</Icon>
              </Link>
            </IconButton>
            <IconButton color="inherit">
              <Link to="contacts/add">
                <Icon>add</Icon>
              </Link>
            </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Header
