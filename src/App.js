import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header"
import Layout from "./pages/Layout";
import Home from "./pages/Home"
import Dup from "./pages/Dup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Dup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;




























// // import React from 'react';
// import './App.css';
// import Button from'./Button';
// import NameForm from './TextInputClass'
// import ExClass from './exClass'
// import ExFunc from './exFunc'
// import Form from './form'
// import Header from './Header.js'
// // import Navbar from './Navbar.js'


// function App() {
// 	return (
// 		<div
// 			style={{
// 				textAlign: "center",
// 				margin: "auto",
// 			}}
// 		>

//       		<Header></Header>

// 			{/* <Navbar></Navbar> */}
// 			<h1 style={{ color: "green" }}>
// 				GeeksforGeeks blows
// 			</h1>

// 			<h3>take a sip</h3>

// 			<Button bg="cyan"> sip </Button>
// 			<Button bg="green"> no sip </Button>
      
// 			<NameForm></NameForm>

// 			<ExClass name="take a sip from a class"></ExClass>
// 			<ExFunc name="take a sip from a func" />

//       		<Form></Form>



// 		</div>
// 	);
// }
// export default App;