import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact.js';
import ContactList from './ContactList.js';

    const contacts = [
        {
            id: 1,
            name: "Scott Thompson",
            phone: "(656)-976-4980",
            email: "romain.hoogmoed@example.com",
            street: "1861 jan pieterszoon coenstraat",
            city: "maasdriel"
        },
        {
            id: 2,
            name: "Mabel Stephens",
            phone: "(656)-976-4980",
            email: "romain.hoogmoed@example.com",
            street: "1861 jan pieterszoon coenstraat",
            city: "maasdriel"
        },
        {
            id: 3,
            name: "Brianna Woods",
            phone: "(656)-976-4980",
            email: "romain.hoogmoed@example.com",
            street: "1861 jan pieterszoon coenstraat",
            city: "maasdriel"
        }
    ];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }
    
    handleBtnClick = () => {
        let inputVal = document.querySelector('input').value;
        this.setState({
            name: inputVal
        })
    }
    
    render() {
        if (!this.state.name) {
            return  <section>
                        <input type="text"></input>
                        <button onClick={this.handleBtnClick}>Search</button>
                    </section>
        } else {
            let name = this.state.name;
            return <section>
                    <input type="text"></input>
                    <button onClick={this.handleBtnClick}>Search</button>
                    <h1>Contacts</h1>
                    { contacts.map(contact => (
                        <Contact contact={contact} key={contact.id} />
                    )) }
                </section>  
            return 
        }
    }
}

export default App;