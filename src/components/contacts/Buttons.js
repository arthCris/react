import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
});

const Buttons = props => {
    const classes = useStyle();
    const { name , type} = props;
    return (
        <div>
            <Button
            className={classes.button}
            type={type}
            >{name}</Button>
        </div>
    )
}

export default Buttons
