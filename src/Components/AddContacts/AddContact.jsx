import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { contactsSelectors } from "../../redux/contactsSlice";

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(contactsSelectors.selectAll);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || number.trim() === "") return;

    if (contacts.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone: number }));
    setName("");
    setNumber("");
  };

  return (
    <div className="add__box">
      <h1 className="title">Phonebook</h1>
      <form className="add__form" onSubmit={handleSubmit}>
        <label className="add__label">
          <p>Name</p>
          <input className="add__input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="add__label">
          <p>Phone</p>
          <input className="add__input" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <button className="add__btn" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
