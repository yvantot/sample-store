import LandingPage from './pages/LandingPage';
import { Routes, Route } from 'react-router-dom';
import SearchFeed from './pages/SearchFeed';
import Product from './pages/Product';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="search" element={<SearchFeed />} />
      <Route path="product/:productId" element={<Product />} />
    </Routes>
  );
};

export default App;
