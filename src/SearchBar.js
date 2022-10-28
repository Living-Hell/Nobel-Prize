
const SearchBar = ({ winners, setSearchResults }) => {
    
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(winners)

        const resultsArray = winners.filter(winners => winners.year.includes(e.target.value) || winners.category.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    const year = [];
    for(let i=2018; i>=1990; i--)
        year.push(i.toString());
    const categories = ["chemistry", "economics", "literature", "peace", "medicine"];
    return (
        

        <div 
        style = {{ display:"flex", textAlign: "left", margin:18, justifyContent:"center"}}
        >
            <div 
            style = {{alignItem:"left", justifyContent:"left"}}
            >
            <form className="search" onSubmit={handleSubmit} />
                    <input 
                    list="year" 
                    placeholder="Search by Year" 
                    id="search" 
                    onChange={handleSearchChange}
                    >
                    </input>
                        <datalist id="year">
                            {year.map((op)=><option>{op}</option>)}
                    </datalist>
                    </div>
                    <div 
                        style = {{alignItem:"center", justifyContent:"center", marginLeft: "20%"}}
                    >
                        <button> 
                            Search
                        </button>
                    </div>
                    <div 
                        style = {{alignItem:"right", justifyContent:"right", marginLeft: "20%"}}
                    >
                    <input 
                        list="categories" 
                        placeholder="Search by Category" 
                        id="search"  
                        onChange={handleSearchChange}>
                    </input>
                        <datalist id="categories">
                            {categories.map((op)=><option>{op}</option>)}
                        </datalist>
                    </div>
                
            </div>
    )
}
export default SearchBar