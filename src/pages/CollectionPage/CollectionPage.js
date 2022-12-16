import classes from "./CollectionPage.module.css";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const params = useParams();
  const movieCollection = useSelector(
    (state) => state.collectionSlice.movieCollection
  );
  const findedCollection = movieCollection.find(
    (collection) => collection.id === params.id
  );

  const listClickHandler = (id) => {
    window.open(`https://www.imdb.com/title/${id}`);
  };

  return (
    <div className={classes.container}>
      <h2>{findedCollection.collectionName.toUpperCase()}</h2>
      <ul>
        {findedCollection.movieList.map((movie) => (
          <li key={movie.id} onClick={() => listClickHandler(movie.id)}>
            {movie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionPage;
