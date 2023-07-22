import { Navbar } from '../../ui';
import { DcPages, HeroPages, MarbelPages, SearchPages } from '../pages';
import { Navigate, Route, Routes } from 'react-router-dom';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarbelPages />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPages />} />
          <Route path="hero/:id" element={<HeroPages />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
