import Header from '@components/Header/Header';
import Listings from '@containers/Listings/Listings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

const App = () => (
  <ErrorBoundary>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Listings />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;
