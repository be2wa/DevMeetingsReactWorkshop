import React, { Component } from 'react';

function Contact({ contact }) {
    return  <div>
                <header>{ contact.name }</header>
                <p>{ contact.phone }</p>
                <p>{ contact.email }</p>
                <p>{ contact.street }, { contact.city }</p>
            </div>
}

export default Contact;