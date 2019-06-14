import React, { Component } from 'react'

import { Consumer } from '../../context';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
}

export class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        console.log({id});
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        console.log(res.data);
        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onSubmit = (dispatch, e) =>{
        e.preventDefault();

        
        this.setState({
            name:'',
            email:'',
            phone:'',
        })
        
        this.props.history.push('/')
    }

    onChange = e =>this.setState({
        [e.target.name]: e.target.value
    })
    
    render() {
        const {name, email, phone} = this.state;
        
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
                    name="phone"
                    label="Phone Number"
                    margin="normal"
                    value={phone}
                    onChange={this.onChange}
                />
                <br/><br/>
                     {/* <Button
                        className={Class.button}
                        type="submit"
                        >Submit</Button> 
                    <Buttons name="submit" type="submit"/>
                        */}
                        <input
                            style={buttonStyle}
                            type="submit"
                            value="SUBMIT"
                        />
                <br/>
                </form>
                    )
                }}
            </Consumer>
            
        )
        
    }
}

export default EditContact
