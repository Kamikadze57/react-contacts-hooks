import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { contactsSelectors } from "../../redux/contactsSlice";

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.selectAll);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) => contact.name?.toLowerCase().includes((filter || "").toLowerCase()));

  return (
    <ul className="contacts__list">
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className="contact__item">
          <p className="contact__name">{name}</p>
          <p className="contact__phone">{phone}</p>
          <button className="delete__btn" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
