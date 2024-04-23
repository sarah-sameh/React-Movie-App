import axios from "axios";
import { useEffect, useState } from "react";
import MoveCard from "./Movecard";
import React, { useContext } from 'react';
import { LanguageContext } from "../context/language";

const MoveList = () => {
    const [moves, setMoves] = useState([]);   
    const [search, setSearch] = useState("");
    const [allMoves, setAllMoves] = useState([]);
    const { language } = useContext(LanguageContext);

    const baseUrl= process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseUrl}/movie/popular?api_key=ffbbd29a4f599c6240471385d0ed9bf1&language=${language}`);
                setMoves(response.data.results);
                setAllMoves(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, [language,baseUrl]);
    

    const handleSearch = (value) => {
        setSearch(value);
        const filtered = moves.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );
        setMoves(filtered);
    };
    const handleReset = () => {
        setSearch("");
        setMoves(allMoves);      
      };

    return (
        <div className="container">
            <br/><br/><br/>
            <h1>Popular Movies</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <br/>
                <button className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
            <hr />
            <div className="move-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {moves.map((movie) => (
                    <MoveCard key={movie.id} item={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoveList;
