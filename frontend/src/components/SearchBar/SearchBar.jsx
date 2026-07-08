import "./SearchBar.css";

function SearchBar({
    value,
    onChange,
    placeholder = "Pesquisar personagens..."
}) {

    return (

        <div className="searchbar">

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />

        </div>

    );

}

export default SearchBar;