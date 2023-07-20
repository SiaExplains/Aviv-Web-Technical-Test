import Header from '@components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import PricesHistory from './containers/PricesHistory';
import { AppRoutes } from './constants';
import ErrorBoundary from './ErrorBoundary';

import 'react-toastify/dist/ReactToastify.css';

import Listings from '@/containers/Listings/Listings';

const App = () => (
  <>
    <ErrorBoundary>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.LISTING} element={<Listings />} />
          <Route path={AppRoutes.PRICES} element={<PricesHistory />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ErrorBoundary>
  </>
);

export default App;
