
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToWatchList, removeFromWatchList } from "../store/slices/counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

const MoveCard = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] =useState(false);

    const handleToggle = () => {
        if (isFavorite) {
            dispatch(removeFromWatchList({ id: props.item.id }));
        } else {
            
            dispatch(addToWatchList(props.item));
        }
        
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="col">
            <div className="card h-100">
                <img src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} className="card-img-top" alt={props.item.title} />
                <div className="card-body">
                    <h5 className="card-title">{props.item.title}</h5>
                    <p className="card-text">{props.item.overview}</p>
                    <p className="card-text"><small className="text-muted">Release Date: {props.item.release_date}</small></p>
                </div>
                <button className="btn btn-warning" onClick={() => navigate(`/showdetails/${props.item.id}`)}>View Details</button>
                
             {/* <button className="btn btn-dark" onClick={handleAddToWatchList}>Add to Watch list</button> */}

             <FontAwesomeIcon
                    icon={isFavorite ? fasHeart : farHeart}
                    style={{ color: isFavorite ? 'red' : 'gray', position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize:'28px' }}
                    onClick={handleToggle}
                />
            </div>
        </div>
    );
};

export default MoveCard;