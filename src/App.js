import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header"
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Dup from "./pages/Dup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Dup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;