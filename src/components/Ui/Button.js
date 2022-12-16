import classes from "./Button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};

export default Button;
