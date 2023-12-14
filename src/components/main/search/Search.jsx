import "./search.css"
const Search = () => {
    return <div className="search-inner">
        <input type="search" className="search" placeholder="Search for a country…" />
        <span className="lupa"></span>
        <select className="option">
            <option className="select" value="Africa">Africa</option>
            <option className="select" value="America">America</option>
            <option className="select" value="Asia">Asia</option>
            <option className="select" value="Europa">Europa"</option>
            <option className="select" value="Oceanya">Oceanya</option>
        </select>
    </div>
}

export default Search;