import "./App.css";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import Initialcontacts from "../data/contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(Initialcontacts);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
