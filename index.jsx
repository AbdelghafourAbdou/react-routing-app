import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import DetailedVan, { loader as detailedVanLoader } from './pages/Vans/DetailedVan';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import HostVan, { loader as hostVanLoader } from './pages/Host/HostVan';
import Details from './pages/Host/Details';
import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import ErrorPage from './components/ErrorPage';
import DataError from './components/DataError';
import Login, { loader as loginLoader, action as loginAction } from './pages/Login';
import { requireAuth } from './utils';

import "./Server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction} />

    <Route path='vans'>
      <Route index element={<Vans />} errorElement={<DataError />} loader={vansLoader} />
      <Route path=":id" element={<DetailedVan />} errorElement={<DataError />} loader={detailedVanLoader} />
    </Route>

    <Route path="host" element={<HostLayout />} errorElement={<DataError />} loader={async ({ request }) => await requireAuth(request)} >
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="reviews" element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="vans" element={<HostVans />} errorElement={<DataError />} loader={hostVansLoader} />
      <Route path='vans/:id' element={<HostVan />} errorElement={<DataError />} loader={hostVanLoader}>
        <Route index element={<Details />} />
        <Route path="pricing" element={<Pricing />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="photos" element={<Photos />} loader={async ({ request }) => await requireAuth(request)} />
      </Route>
    </Route>

    <Route path='*' element={<ErrorPage />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);