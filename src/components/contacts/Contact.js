import React, {Component} from 'react';
import { Consumer } from '../../context';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: "gray",
    }
  });

  const Class = () => {
        return useStyles();
    }

class Contact extends Component{
    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };
    
    render(){
        const { id, name, email, number } = this.props.contact;
        return(
        <Consumer>
            {value => {
                const { dispatch } = value;
            return(
            <List className={Class.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Icon color="primary" style={{fontSize: 45}}>account_circle</Icon>
                    </ListItemAvatar>  
                    <ListItemText primary={<Typography style={{fontSize:25}}>{name}</Typography>}
                        secondary={<Typography>{email}<br/><p>{number}</p></Typography>}
                    />
                    </ListItem>
                                
                                
                                <ListItemSecondaryAction style={{ paddingRight:40 }}>
                                <IconButton edge="end" aria-label="Delete">
                                    <Icon>create</Icon>
                                </IconButton>
                                </ListItemSecondaryAction>
                                <ListItemSecondaryAction>
                                <IconButton 
                                edge="end" 
                                aria-label="Delete"
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                                    <Icon>delete</Icon>
                                </IconButton>
                                </ListItemSecondaryAction>
                                
                
            </List>
        )}}
        </Consumer>
        )
    }
}

export default Contact;