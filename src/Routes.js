import { Routes as RoutesDefinition, Route } from 'react-router-dom';
import { LandingPage, DetailPage, NotFoundPage } from './pages';
import ROUTES from './config/routes';

function Routes() {
  return (
    <RoutesDefinition>
      <Route path={ROUTES.MAIN} element={<LandingPage />} />
      <Route path={ROUTES.DETAILED} element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RoutesDefinition>
  );
}

export default Routes;
