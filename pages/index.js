import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }){
    const router = useRouter();
    const movieClick = (id) =>{
        router.push(`/movies/${id}`);
    }

    return (
        <div className="container">
            <Seo title={"Home"} />
            {results?.map((movie) => (
                <div onClick={ () => movieClick(movie.id) }className="movie" key={movie.id} >
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                    <h4>
                        <Link href={`/movies/${movie.id}`}>
                            <a>{movie.original_title}   </a>
                        </Link>
                    </h4>
                </div>
            ))}
            <style jsx>{`
                .container {  
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie {
                    cursor: pointer;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                 transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>                 
        </div>
        
    )
}

export async function getServerSideProps(){
    // getServerSideProps <- 함수명은 이것으로 정해져있음
    // 여기에 작성되는 코드는 서버에서만 돌아감.
    // API key 숨기는 작업도 여기서해도 됨
    const {results} = await (await fetch(`http://localhost:3000/api/movies`)).json();
    return{
        props: {
            results
        },
    };
}