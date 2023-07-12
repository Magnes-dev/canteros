import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Eventos from './pages/eventos';
import Admin from './pages/admin';
import Base from './pages/base';
import './styles/app.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='eventos' element={<Eventos />} />
          <Route path='admin' element ={<Admin />} />
          <Route path='base' element={<Base />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
