import classes from "./List.module.css";
import ListItem from "./MovieListItem";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const name = useSelector((state) => state.movieSlice.movieName);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${name}&apikey=1cf8eb23`)
      .then((res) => res.json())
      .then((data) => setData(data.Search ?? []));
  }, [name]);

  return (
    <ul className={classes.ul}>
      {data.map((movie) => (
        <ListItem
          name={movie.Title + " " + movie.Year}
          img={movie.Poster}
          id={movie.imdbID}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
};

export default List;
