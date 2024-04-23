import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MoveDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const params  = useParams();
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=ffbbd29a4f599c6240471385d0ed9bf1`)
            .then((res) => setMovieDetails(res.data))
            .catch((error) => console.log(error));
    }, [params.id]);  

    return (
        <div className="container" >
            <h1>{movieDetails.title}</h1>
            <hr/>
            <br/>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} style={{borderRadius: '10px'}}/>
                </div>
                <div style={{ flex: 1, marginTop: '120px' }}>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.release_date}</p>
                    <p>{movieDetails.overview}</p>
                    <h5>Vote Average:  {movieDetails.vote_average}</h5>
                    <h5>Popularity:  {movieDetails.popularity}</h5>
                    
                    
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Link className="btn btn-warning"   to='/'>Go To List</Link>
            </div>
        </div>
    );
}

export default MoveDetails;
