import React, { Component } from 'react'
// import Buttons from './Buttons';

import TextField from '@material-ui/core/TextField';



export class AddContact extends Component {
    state = {
        name: '',
        email: '',
        number: ''
    }

    onSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }

    onChange = e =>this.setState({
        [e.target.name]: [e.target.value]
    })

    render() {
        const {name, email, number} = this.state;
        return (
            <div>
                <br/>
                <form onSubmit={this.onSubmit}>
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
                    label="email"
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
                    <input 
                        type="submit"
                        name="submit"
                        value="submit"
                        />
                    {/* <Buttons name="submit" type="submit"/> */}
                <br/>
                </form>
            </div>
        )
        
    }
}

export default AddContact
