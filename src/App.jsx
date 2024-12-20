import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";
import "./App.css";
import Register from "./components/Register";
import Read from "./components/Read";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register></Register>}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
