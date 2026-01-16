const AddContact = ({ name, number, onNameChange, onNumberChange, onAdd }) => {
  return (
    <div className="add__box">
      <form className="add__form" onSubmit={(e) => e.preventDefault()}>
        <label className="add__label">
          <p>Name</p>
          <input className="add__input" type="text" name="name" value={name} onChange={onNameChange} />
        </label>
        <label className="add__label">
          <p>Phone</p>
          <input className="add__input" type="text" name="number" value={number} onChange={onNumberChange} />
        </label>
      </form>
      <button className="add__btn" type="button" onClick={onAdd}>
        Add contact
      </button>
    </div>
  );
};

export default AddContact;
