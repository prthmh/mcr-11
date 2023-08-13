import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LangingPage/LandingPage";
import PageTemplate from "./pages/PageTemplate/PageTemplate";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import NewMoviePage from "./pages/NewMoviePage/NewMoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PageTemplate>
              <LandingPage />
            </PageTemplate>
          }
        />
        <Route
          path="/watchlist"
          element={
            <PageTemplate>
              <WatchListPage />
            </PageTemplate>
          }
        />
        <Route
          path="/addNewMovie"
          element={
            <PageTemplate>
              <NewMoviePage />
            </PageTemplate>
          }
        />
        <Route
          path="/movieDetail/:movieId"
          element={
            <PageTemplate>
              <MovieDetail />
            </PageTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
