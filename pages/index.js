import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "92d212c7f1de73e63ed4de76f730528f";

export default function Home(){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
       (async() => {
            const {results} = await (await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`
            )).json();
            console.log(results);
            setMovies(results);
       })();
    }, []);
    return (
        <div>
            <Seo title={"Home"} />
            <h1>Welcome :)</h1>
            {!movies && <h4>Loading...</h4>} 
            {movies?.map((movie) => (
                <h4 key={movie.id}>{movie.original_title}</h4>
            ))}
        </div>
    )
}