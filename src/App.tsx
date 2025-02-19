import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/home";
import Post from "./pages/post";

// Layout
import UserLayout from "./components/UserPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="user" element={<UserLayout />}>
          <Route index element={<Post />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
