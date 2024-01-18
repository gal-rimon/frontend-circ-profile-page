import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/pages/login";
import Profile from "./Components/pages/profile";
import Home from "./Components/pages/home";
import Posts from "./Components/pages/posts";
import Messages from "./Components/pages/messages";
import Global from "./Components/pages/global";
import Settings from "./Components/pages/settings";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/global" element={<Global />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
