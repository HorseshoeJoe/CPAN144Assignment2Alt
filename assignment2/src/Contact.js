import React from 'react';

function Contact({ name, email }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Contact;
