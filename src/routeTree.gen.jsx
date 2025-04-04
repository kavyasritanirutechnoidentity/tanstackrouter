/* eslint-disable */
// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes
import { Route as rootRoute } from './routes/__root';
import { Route as RouterImport } from './routes/router';
import { Route as LoginImport } from './routes/login';
import { Route as HomeImport } from './routes/home';
// import { Route as DashboardImport } from './routes/dashboard';
import { Route as AboutImport } from './routes/about';
import { Route as IndexImport } from './routes/index';

// Create/Update Routes
const RouterRoute = RouterImport.update({
  id: '/router',
  path: '/router',
  getParentRoute: () => rootRoute,
});

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
});

const HomeRoute = HomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => rootRoute,
});

const DashboardRoute = DashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
});

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
});

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
});

// Create and export the route tree
const rootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  DashboardRoute: DashboardRoute,
  HomeRoute: HomeRoute,
  LoginRoute: LoginRoute,
  RouterRoute: RouterRoute,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren);

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/dashboard",
        "/home",
        "/login",
        "/router"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/dashboard": {
      "filePath": "dashboard.jsx"
    },
    "/home": {
      "filePath": "home.jsx"
    },
    "/login": {
      "filePath": "login.jsx"
    },
    "/router": {
      "filePath": "router.jsx"
    }
  }
}
ROUTE_MANIFEST_END */