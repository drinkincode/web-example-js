// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App



import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header"
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Dup from "./pages/Blog";

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
