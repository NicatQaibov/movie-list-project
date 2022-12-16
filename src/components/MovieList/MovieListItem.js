import { useDispatch } from "react-redux";
import { addToStore } from "../../store";
import Button from "../Ui/Button";
import classes from "./MovieListItem.module.css";

const MovieListItem = ({ id, img, name, variant }) => {
  const dispatch = useDispatch();

  const buttonClickHandler = (name, id) => {
    const movie = { name, id };
    dispatch(addToStore(movie));
  };
  return (
    <li className={classes.listItem}>
      <div className={classes.imgContainer}>
        <img src={img} alt={name + "movie"} />
      </div>
      <div className={classes.nameContainer}>
        <h2 className={classes.name}>{name}</h2>
        <div>
          <Button
            onClick={() => {
              buttonClickHandler(name, id);
            }}
          >
            Add To Collection
          </Button>
        </div>
      </div>
    </li>
  );
};

export default MovieListItem;
