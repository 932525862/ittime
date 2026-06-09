import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import Contact from '../../pages/contact';
import Courses from '../../pages/courses';
import Mentors from '../../pages/mentors';
import CourseDetail from '../../pages/courses/pages/CourseDetail';
import NotFound from '../../pages/NotFound';
import HeaderLayout from '../../layout/HeaderLayout';
import FooterLayout from '../../layout/FooterLayout';

const PageWrapper = ({ children }) => (
  <div className="wrapper min-h-screen bg-gray-50">
    <HeaderLayout />
    {children}
    <FooterLayout />
  </div>
);

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />
  },
  {
    path: '/mentors',
    element: <Mentors/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '*',
    element: <NotFound />
  }
];

function RootRoute() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} 
          element={<PageWrapper>{route.element}</PageWrapper>} 
        />
      ))}
    </Routes>
  );
}

export default RootRoute;