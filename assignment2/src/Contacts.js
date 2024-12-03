import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({ contacts: data });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <h1>Contact List</h1>
                {this.state.contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        email={contact.email}
                    />
                ))}
            </div>
        );
    }
}

export default Contacts;
