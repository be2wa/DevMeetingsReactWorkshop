import React, { Component } from 'react';
import Contact from './Contact';

function ContactList({ contacts }) {
    return  <div>
                {contacts.map(contact => 
                    <Contact key={contact.id} item={contact} />
                )}
            </div>
}

export default ContactList