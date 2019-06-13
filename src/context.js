import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            console.log(action.payload);
            return{
                ...state,
                contacts: state.contacts.filter(contact => 
                 contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts: [action.payload,
                ...state.contacts]
            };
        default:
            return state;
    }
}

export class Provider extends Component{
    state = {
        contacts : [
            {
                id: 1,
                name: "Arth Cris M. Yuson",
                email: "arthc010798@gmail.com",
                number: "09503961592"
            },
            {
                id: 2,
                name: "Frank Lou A. Ubay",
                email: "Frank010798@gmail.com",
                number: "09503961592"                
            },
            {
                id: 3,
                name: "Louis Andrew Suelto",
                email: "Louis010798@gmail.com",
                number: "09503961592"
            }
        ],
        dispatch: action => {this.setState(state => 
            reducer(state, action))
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
