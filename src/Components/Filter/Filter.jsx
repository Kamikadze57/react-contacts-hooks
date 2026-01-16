const Filter = ({ filterValue, onFilterChange }) => {
  return (
    <div className="filter__box">
      <label className="filter__label">
        <p>Find by name</p>
        <input className="filter__input" type="text" value={filterValue} onChange={onFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
