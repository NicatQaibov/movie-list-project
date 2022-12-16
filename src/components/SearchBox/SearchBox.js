import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { changeMovieName } from "../../store";

import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const [value, setValue] = useState("");

  const inputId = useId();
  const dispath = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispath(changeMovieName(value));
  };

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor={inputId}>Search Movie:</label>
        <br />
        <div className={classes.inputContainer}>
          <input
            type="text"
            id={inputId}
            value={value}
            onChange={inputChangeHandler}
            placeholder="Movie Name"
            className={classes.input}
          />
          <button disabled={!value} className={classes.button}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
