import Collection from "../../components/CollectionBox/Collection";
import List from "../../components/MovieList/List";
import SearchBox from "../../components/SearchBox/SearchBox";
import classes from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.leftSide}>
        <SearchBox />
        <List />
      </div>
      <div className={classes.rightSide}>
        <Collection />
      </div>
    </div>
  );
};

export default MainPage;
