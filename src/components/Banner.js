import React, { useEffect, useState } from "react";
import axios from "../axios";
import request from "../Request";
import '../Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchNetflixOriginals);
            setMovie(
                response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
                ]
            );
            return response;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    console.log(movie)

    return (

        <header className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                {/* {title} */}
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                {/* {div} */}
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>

                </div>

                <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>

                {/* {descripttio} */}
            </div >
            <div className="banner--fadeBottom" />
        </header>
    );
};

export default Banner;
