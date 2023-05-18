import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import FirstPage from "./Components/Firstpage/FirstPage";
import SecondPage from "./Components/SecondPage/SecondPage";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <FirstPage />
            </Dashboard>
          }
        />
        <Route
          path="secondpage"
          element={
            <Dashboard>
              <SecondPage />
            </Dashboard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
