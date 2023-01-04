import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PrivateRoute } from './components/authorization';

import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import RiwayatMateri from './pages/RiwayatMateri';
import RiwayatSoal from './pages/RiwayatSoal';
import MateriFisNewton from './pages/MateriFisNewton';
import MateriFisDaya from './pages/MateriFisDaya';
import MateriBioSH from './pages/MateriBioSH';
import MateriBioTumbuhan from './pages/MateriBioTumbuhan';
import MateriMatTrigonometri1 from './pages/MateriMatTrigonometri1';
import PTugas from './pages/PTugas';
import Home from './pages/Home';
import HIstoriMateri from './pages/HistoriMateri';
import HIstoriTugas from './pages/HistoriTugas';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import TugasMTK from './pages/TugasMTK';
import TugasBio from './pages/TugasBio';
import ProfileEdit from './pages/CompleteRegistration';
import ProfilePicture from './pages/ProfilePicture';
import Contoh from './pages/Contoh';

// Menaruh daftar routing disini
const router = createBrowserRouter([
  {
    path: "/index",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/explore/:mapel",
    element: <Explore />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/riwayat/materi",
    element: <RiwayatMateri />,
    errorElement: <ErrorPage />
  },
  {
    path: "/histori/materi",
    element: <HIstoriMateri />,
    errorElement: <ErrorPage />
  },
  {
    path: "/histori/tugas",
    element: <HIstoriTugas />,
    errorElement: <ErrorPage />
  },
  {
    path: "/riwayat/soal",
    element: <RiwayatSoal />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tugasmtk",
    element: <TugasMTK />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tugasbio",
    element: <TugasBio />,
    errorElement: <ErrorPage />
  },
  {
  path: "/materi/fisika/newton",
    element: <MateriFisNewton />,
    errorElement: <ErrorPage />
  },
  {
    path: "/materi/fisika/daya",
      element: <MateriFisDaya />,
      errorElement: <ErrorPage />
  },
  {
    path: "/materi/biologi/selHewan",
      element: <MateriBioSH />,
      errorElement: <ErrorPage />
  },
  {
  path: "/materi/biologi/tumbuhan",
  element: <MateriBioTumbuhan />,
  errorElement: <ErrorPage />
  },
  {
  path: "/materi/matematika/trigonometri/part1",
  element: <MateriMatTrigonometri1 />,
  errorElement: <ErrorPage />
  },
  {
  path: "/Ptugas",
  element: <PTugas />,
  errorElement: <ErrorPage />
  },
  {
    path: "/profil",
    element: <PrivateRoute><Profile /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: "/profil/edit",
    element: <PrivateRoute><ProfileEdit /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: "/profil/picture",
    element: <PrivateRoute><ProfilePicture /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: '/testredirect',
    element: <PrivateRoute><h1>Hello</h1></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: '/testcontoh/:id',
    element: <Contoh />,
    errorElement: <ErrorPage />
  }
]);

// Memanggil object routing disini
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
