import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    console.log(movie);
    return (
        <div>
            {loading ? <h2>Loading..</h2> :
                <MovieDetail
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    genres={movie.genres}
                    year={movie.year}
                    summary={movie.description_full}
                />}
        </div>
    );
}
export default Detail;