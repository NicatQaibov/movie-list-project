import { useDispatch } from "react-redux";
import { removeMovie } from "../../store";

import classes from "./CollectionListItem.module.css";

const CollectionListItem = ({ name, id }) => {
  const dispatch = useDispatch();
  const buttonClickHandler = () => {
    console.log(id);
    dispatch(removeMovie(id));
  };
  return (
    <li className={classes.li}>
      <span>{name}</span>{" "}
      <button type="button" onClick={buttonClickHandler}>
        X
      </button>
    </li>
  );
};

export default CollectionListItem;
