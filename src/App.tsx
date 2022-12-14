import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyBlogs from "./pages/MyBlogs";
import CreateBlog from "./pages/CreateBlog";
import ViewBlog from "./pages/ViewBlog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/myblogs" element={<MyBlogs />} />
        <Route path="/viewblog" element={<ViewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
