import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LangingPage/LandingPage";
import PageTemplate from "./pages/PageTemplate/PageTemplate";

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
      </Routes>
    </>
  );
}

export default App;
