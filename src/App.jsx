import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import { Google } from "./components/googlehome";
import { OneResult } from "./components/OneResult";
import { Result } from "./components/Result";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Google />}></Route>
        <Route path="/search" element={<Result />}></Route>
        <Route path="/page/:id" element={<OneResult />}></Route>
      </Routes>
    </div>
  );
}

export default App;
