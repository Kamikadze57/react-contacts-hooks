import "./App.css";
import { useState, useEffect } from "react";
import AddContact from "./Components/AddContacts/AddContact";
import Filter from "./Components/Filter/Filter";
import ContactsList from "./Components/ContactsList/ContactsList";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleFilterChange = (e) => setFilter(e.target.value);

  const addContact = () => {
    if (name.trim() === "" || number.trim() === "") return;

    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const LastId = contacts.reduce((max, contact) => Math.max(max, Number(contact.id)), 0);
    const newId = (LastId + 1).toString();
    const newContact = {
      id: newId,
      name: name,
      phone: number,
    };

    setContacts((prev) => [...prev, newContact]);
    setName("");
    setNumber("");
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const visibleContacts = getFilteredContacts();
  return (
    <div className="app">
      <AddContact name={name} number={number} onNameChange={handleNameChange} onNumberChange={handleNumberChange} onAdd={addContact} />
      <Filter filterValue={filter} onFilterChange={handleFilterChange} />
      <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
