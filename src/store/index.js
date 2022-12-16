import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const movieInitialState = { movieList: [], movieName: "" };
const collectionInitialState = { movieCollection: [] };

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: movieInitialState,
  reducers: {
    changeMovieName(state, action) {
      state.movieName = action.payload;
    },
    addToStore(state, action) {
      if (
        state.movieList.some((element) => element.name === action.payload.name)
      ) {
        return;
      }
      state.movieList.push(action.payload);
    },
    removeMovie(state, action) {
      console.log(action.payload);
      state.movieList = state.movieList.filter(
        (element) => element.id !== action.payload
      );
    },
    clearList(state) {
      state.movieList = [];
    }
  }
});

const collectionSlice = createSlice({
  name: "movieCollection",
  initialState: collectionInitialState,
  reducers: {
    addToCollection(state, action) {
      state.movieCollection.push(action.payload);
    }
  }
});

const store = configureStore({
  reducer: {
    movieSlice: movieSlice.reducer,
    collectionSlice: collectionSlice.reducer
  }
});

export const {
  clearList,
  changeMovieName,
  addToStore,
  removeMovie
} = movieSlice.actions;
export const { addToCollection } = collectionSlice.actions;

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default store;
