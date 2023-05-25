import { Loader, Navbar } from "./";
import { Home, Login } from "../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "../hooks";
import Signup from "../pages/Signup";
import Settings from "../pages/Setting";

function App() {
  const auth = useAuth();
  
  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>

          <Route exact path="/login" element={<Login />}></Route>

          <Route exact path="/register" element= {<Signup/>}></Route>

          <Route exact path= "/settings" element= {<Settings/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
