import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function MovieDetail({coverImg, id, title, genres, year, summary}) {
    return (
        <div>
            <h2>
                {title} ({year})
            </h2>
            <img src={coverImg}/>
            <ul>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>
                {summary}
            </p>
        </div>
    );
}

MovieDetail.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
}

export default MovieDetail;