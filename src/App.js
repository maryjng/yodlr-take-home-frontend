import Api from "./api"
import RegisterForm from "./RegisterForm"
import UserList from "./UserList"
import Home from "./Home";
import './App.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/" element={<Home />} />
        <Link to="/register" element={<RegisterForm />} />
        <Link to="/users" element={<UserList />} />
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/users" element={<UserList />}>
            {/* <Route path=":user_id" element={<User />} /> */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
