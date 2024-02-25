import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import DetailedVan from './pages/Vans/DetailedVan';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVan from './pages/Host/HostVan';
import Details from './pages/Host/Details';
import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import ErrorPage from './components/ErrorPage';

import "./Server"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path='vans'>
            <Route index element={<Vans />} />
            <Route path=":id" element={<DetailedVan />} />
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="income" element={<Income />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="vans" element={<HostVans />}></Route>
            <Route path='vans/:id' element={<HostVan />}>
              <Route index element={<Details/>} ></Route>
              <Route path="pricing" element={<Pricing/>} ></Route>
              <Route path="photos" element={<Photos/>} ></Route>
            </Route>
          </Route>

          <Route path='*' element={<ErrorPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);