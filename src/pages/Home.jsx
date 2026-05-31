import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const movies = [
        {
            id: 1,
            title: "John Wick 3",
            release_date: "2024-04-32",
            url: "https://example.com/john-wick-3"
        },
        {
            id: 2,
            title: "Dune",
            release_date: "2024-02-28",
            url: "https://example.com/dune"
        },
        {
            id: 3,
            title: "Oppenheimer",
            release_date: "2023-07-21",
            url: "https://example.com/oppenheimer"
        },
        {
            id: 4,
            title: "Inception",
            release_date: "2010-07-16",
            url: "https://example.com/inception"
        }
    ]
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault() 
        alert(searchQuery)
        setSearchQuery("")
    }


    return (<div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            >

            </input>
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (movie.title.toLowerCase().
                startsWith(searchQuery) && 
                    <MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>)
}

export default Home