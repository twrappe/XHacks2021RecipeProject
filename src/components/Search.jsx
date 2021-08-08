import './Search.css'
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div classname ="searchwrap">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search recipes"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
    </div>
);
export default SearchBar;
