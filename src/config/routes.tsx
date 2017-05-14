import { RouteProps } from 'react-router';

import About from '../screens/About';
import Home from '../screens/Home';
import Issues from '../screens/Issues';
import NotFound from '../screens/NotFound';
import Organizations from '../screens/Organizations';


export type Route = RouteProps & {
  title: string
};

const routes: Route[] = [
  {
    exact: true,
    path: '/',
    component: Home,
    title: 'Democratizr',
  },
  {
    exact: true,
    path: '/about/',
    component: About,
    title: 'About',
  },
  {
    exact: true,
    path: '/issues/',
    component: Issues,
    title: 'Issues',
  },
  {
    exact: true,
    path: '/organizations/',
    component: Organizations,
    title: 'Organizations',
  },
  {
    component: NotFound,
    title: 'Not Found',
  }
];

export default routes;
