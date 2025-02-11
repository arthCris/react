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
      display: 'inline'
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
              
              <Link to="contacts/add" style={{textDecoration: 'none',color: 'white'}}>
                <IconButton color="inherit">
                    <Icon>add</Icon>
                </IconButton>
              </Link>
              
              <Link to="/" style={{textDecoration: 'none',color: 'white',marginRight: 30}}>
                <IconButton color="inherit">
                    <Icon>home</Icon>
                </IconButton>
              </Link>
              
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default Header
