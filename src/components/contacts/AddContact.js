import React, { Component } from 'react'
import uuid from 'uuid';
// import Buttons from './Buttons';

// import { makeStyles } from '@material-ui/styles'
import { Consumer } from '../../context';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';

const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
}

export class AddContact extends Component {
    state = {
        name: '',
        email: '',
        number: ''
    }

    onSubmit = (dispatch, e) =>{
        e.preventDefault();

        const { name, email, number } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            number
        }
        console.log(newContact);

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        this.setState({
            name:'',
            email:'',
            number:'',
        })
        
    }

    onChange = e =>this.setState({
        [e.target.name]: e.target.value
    })
    
    render() {
        const {name, email, number} = this.state;
        
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return(
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextField
                    id="outlined-adornment-weight"
                    variant="outlined"
                    name="name"
                    label="Name"
                    margin="normal"
                    value={name}
                    onChange={this.onChange}
                /><br/>
                <TextField
                    id="outlined-adornment-weight"
                    variant="outlined"
                    type="email"
                    name="email"
                    label="Email"
                    autoComplete="email"
                    margin="normal"
                    value={email}
                    onChange={this.onChange}
                /><br/>
                <TextField
                    id="outlined-adornment-weight"
                    variant="outlined"
                    name="number"
                    label="Phone Number"
                    margin="normal"
                    value={number}
                    onChange={this.onChange}
                />
                <br/><br/>
                     {/* <Button
                        className={Class.button}
                        type="submit"
                        >Submit</Button> 
                    <Buttons name="submit" type="submit"/>
                        */}
                        <button
                            style={buttonStyle}
                            type="submit"
                        >SUBMIT</button>
                        
                <br/>
                </form>
                    )
                }}
            </Consumer>
            
        )
        
    }
}

export default AddContact
