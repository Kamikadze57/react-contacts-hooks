const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className="contacts__list">
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className="contact__item">
            <p className="contact__name">{name}</p>
            <p className="contact__phone">{phone}</p>
            <button className="delete__btn" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
