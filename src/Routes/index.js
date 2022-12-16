import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import CollectionListPage from "../pages/CollectionList/CollectionListPage";
import CollectionPage from "../pages/CollectionPage/CollectionPage";

const RouteContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/collection/" element={<CollectionListPage />} />
      <Route path="/collection/:id" element={<CollectionPage />} />
    </Routes>
  );
};

export default RouteContainer;
