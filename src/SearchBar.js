
const SearchBar = ({ winners, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(winners)

        const resultsArray = winners.filter(winners => winners.year.includes(e.target.value) || winners.category.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <div style = {{ textAlign: "left", margin:18, alignItems:"center"}}>
            <form className="search" onSubmit={handleSubmit} >
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    placeholder="Search by Year or Category"
                    onChange={handleSearchChange}
                />
                <button > Search
                </button>
            </form>
            </div>
    )
}
export default SearchBar