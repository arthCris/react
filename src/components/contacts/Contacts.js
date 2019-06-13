import React, {Component} from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

import Container from '@material-ui/core/Container';

class Contacts extends Component{

    render(){
        return(
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <Container maxWidth="sm">
                            
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact}/>
                            ))}
                            </Container>
                        </React.Fragment>
                    );
                }}
                
            </Consumer>
        )
    }
}

export default Contacts;