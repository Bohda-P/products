import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import { Home, Product } from '../pages';

export const RoutesProvider = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
