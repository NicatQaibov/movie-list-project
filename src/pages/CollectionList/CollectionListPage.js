import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./CollectionListPage.module.css";

const CollectionListPage = () => {
  const movieCollection = useSelector(
    (state) => state.collectionSlice.movieCollection
  );

  return (
    <div className={classes.container}>
      <h2>All Collections</h2>
      <ul className={classes.linkContainer}>
        {movieCollection.map((collection) => (
          <li key={collection.id}>
            <Link to={collection.id}>{collection.collectionName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionListPage;
