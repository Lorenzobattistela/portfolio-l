import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/layout';
import Home from './components/Home/home';
import Resume from "./components/Resume/resume";
<<<<<<< HEAD
import About from './components/About/about';
=======
>>>>>>> c96e58041355322d4081fdaccf32ec4284a3ad4e
import Projects from './components/Projects/projects';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
<<<<<<< HEAD
          <Route path='/about' element={<About/>}/>
=======
>>>>>>> c96e58041355322d4081fdaccf32ec4284a3ad4e
          <Route path="/projects" element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
