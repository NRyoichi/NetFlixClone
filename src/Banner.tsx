import axios from "axios";
import { useEffect, useState } from "react";
import instance from "./axios";
import { requests } from "./request";
import "./style/Banner.css";

type MovieProps = {
  title?: string;
  name?: string;
  orignal_name?: string;
  backdrop_path?: string;
  poster_path?: string;
  overview?: string;
};

export const Banner: React.FC = () => {
  const [movie, setMovie] = useState<MovieProps>({});
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.feachTrending);
      console.log(request.data.result);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  function truncate(str: any, n: number) {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w300${movie.backdrop_path}")`,
        backgroundPosition: "top",
      }}
    >
      <div className="Bannercontents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>
        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner-fadeBottom" />
    </header>
  );
};
