import { Route, Routes } from 'react-router-dom';
import { LoginPages } from '../auth';
import { HeroesRoutes } from '../heros';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter>
              <LoginPages />
            </PublicRouter>
          }
        />
        {/* <Route path="login" element={<LoginPages />} /> */}
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <HeroesRoutes />
            </PrivateRouter>
          }
        />
        {/* <Route path="/*" element={<HeroesRoutes />} /> */}
      </Routes>
    </>
  );
};
