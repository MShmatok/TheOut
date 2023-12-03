import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';

import { GlobalStyles } from './GlobalStyled';
import ModalChangeContact from '../pages/modalChange/ModalChangeContact';

import { ToastContainer } from 'react-toastify';
import Gallery from 'pages/gallery/Gallery';
import Favorite from 'pages/favorite/Favorite';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Gallery />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      {/* <ModalChangeContact /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export { App };
