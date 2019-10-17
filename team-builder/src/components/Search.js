import React, { useState, useEffect } from "react"; 

const Search = props => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    console.log("test this", props);

    // useEffect(()=>{
    //     const results = props.members.filter(event =>
    //         event.toLowerCase().includes(search)
    //         );
    //         setResults(results);
    // }, [search]);
    const handleChange = e => {
        setSearch(e.target.value);

    }
    return(
        <div>
            <label htmlFor="search">search</label>
            <input
            name="name"
            id="name"
            type="text"
            name="textfield"
            placeholder="search for teammates"
            value={search}
            onChange={handleChange}/>
            <div>
                <ul>
                {results.map(character => (
                    <li key={character}>{character}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}




export default Search; 

