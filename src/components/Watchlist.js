import { useDispatch, useSelector } from 'react-redux';
import { removeFromWatchList } from '../store/slices/counter';

const WatchList = () => {
    const watchList = useSelector(state => state.watchList.favorites);
    const dispatch = useDispatch();


    const handleRemoveFromWatchList = (movieId) => {
        dispatch(removeFromWatchList({ id: movieId }));
    };

    return (
        <div style={{ margin: '20px' }}>
            <br/><br/><br/>
            <h1>WatchList</h1>
            <hr/>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {watchList.map(movie => (
                    <div key={movie.id} style={{ width: '250px', textAlign: 'center' }}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
                        <div>
                            <h2>{movie.title}</h2>
                            <p>Release Date: {movie.release_date}</p>
                           
                            <button className='btn btn-warning' onClick={() => handleRemoveFromWatchList(movie.id)}>Remove from WatchList</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchList;
