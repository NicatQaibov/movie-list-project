import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid";

import Button from "../Ui/Button";
import classes from "./Collection.module.css";
import CollectionListItem from "./CollectionListItem";
import { clearList } from "../../store";
import { addToCollection } from "../../store";

const Collection = () => {
  const [value, setValue] = useState("");

  const movieList = useSelector((state) => state.movieSlice.movieList);
  const dispatch = useDispatch();

  const collectionId = useRef(uuid());
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      id: collectionId.current,
      collectionName: value,
      movieList
    };

    dispatch(addToCollection(data));
    dispatch(clearList());
    setValue("");
  };

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler} className={classes.container}>
      <input
        value={value}
        onChange={inputChangeHandler}
        type="text"
        placeholder="Collection Name"
      />
      <ul className={classes.ul}>
        {movieList.map((movie) => (
          <CollectionListItem name={movie.name} id={movie.id} key={movie.id} />
        ))}
      </ul>
      <Button disabled={!value}>Save Collection</Button>
    </form>
  );
};

export default Collection;
