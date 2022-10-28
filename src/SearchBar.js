
const SearchBar = ({ winners, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(winners)

        const resultsArray = winners.filter(winners => winners.year.includes(e.target.value) || winners.category.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    const year = [];
    for(let i=1990; i<=2018; i++)
        year.push(i.toString());
    const categories = ["chemistry", "economics", "literature", "peace", "medicine"];
    return (

        <div style = {{ textAlign: "left", margin:18, marginLeft:250}}>
            <form className="search" onSubmit={handleSubmit} ></form>
                    <input list="year" placeholder="Search by Year" id="search" onChange={handleSearchChange}></input>
                        <datalist id="year">
                            {year.map((op)=><option>{op}</option>)}
                    </datalist>
                    <button style = {{ marginLeft:250}}> Search
                    </button>
                    <input list="categories" placeholder="Search by Category" id="search" style = {{ marginLeft:250}} onChange={handleSearchChange}></input>
                        <datalist id="categories">
                            {categories.map((op)=><option>{op}</option>)}
                    </datalist>
                    
                
            </div>
    )
}
export default SearchBar