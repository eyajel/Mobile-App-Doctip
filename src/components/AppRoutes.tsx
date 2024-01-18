import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const LazyForgotPasswordForm = lazy(() => import('./ForgotPasswordForm'));
const LazyHomePage = lazy(() => import('../pages/HomePage'));

const routes = [
  { path: '/', element: <LazyHomePage /> },
  { path: '/forgot-password', element: <LazyForgotPasswordForm />  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;


