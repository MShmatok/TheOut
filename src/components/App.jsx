import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../pages/home/Home';

import { GlobalStyles } from '../GlobalStyle/GlobalStyled';

import { ToastContainer } from 'react-toastify';
import Gallery from 'pages/gallery/Gallery';
import Favorite from 'pages/favorite/Favorite';
import ModalCarCard from 'pages/modal/ModalCarCard';

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
      <ModalCarCard />
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
