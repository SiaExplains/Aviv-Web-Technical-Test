import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PricesHistory from './containers/PricesHistory';
import { AppRoutes } from './constants';
import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.LISTING} element={<Listings />} />
        <Route path={AppRoutes.PRICES} element={<PricesHistory />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
