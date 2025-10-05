import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React from "react";
// import ReactDOM from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HashRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import PersonalBlog from "./PersonalBlog";
// import ExerciseBlog from "./ExerciseBlog";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/#/blog" element={<PersonalBlog />} />
//         <Route path="/#/1000-reasons" element={<ExerciseBlog />} />
//       </Routes>
//     </HashRouter>
//   </React.StrictMode>
// );
