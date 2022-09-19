import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <h1>
                <Link to="/movie">{title}</Link>
            </h1>
            <img src={coverImg}/>
            <p>{summary}</p>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;