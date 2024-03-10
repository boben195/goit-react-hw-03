import "./App.css";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import Initialcontacts from "../data/contacts.json";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedObject = localStorage.getItem("data");
    return savedObject ? JSON.parse(savedObject) : Initialcontacts;
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((cont) => cont.id !== contactId);
    });
  };

  const currentData = contacts.filter((cont) =>
    cont.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={search} onSearch={setSearch} />
        <ContactList contacts={currentData} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
