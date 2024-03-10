import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.container}>
      <p>Find Contacts by Name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
