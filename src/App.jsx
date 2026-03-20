//App.jsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import Download from "./pages/Download.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <MainPage />
          </MainLayout>
        }
      />
      <Route
        path="/download"
        element={
          <MainLayout>
            <Download />
          </MainLayout>
        }
      />
      <Route
        path="*"
        element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
