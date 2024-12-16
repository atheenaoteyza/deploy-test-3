import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";
import "./App.css";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register></Register>}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
