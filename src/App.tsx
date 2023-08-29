import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from "@tanstack/react-router";
import {
  Home,
  OurCompany,
  Locations,
  Contact,
  AppDesign,
  WebDesign,
  GraphicDesign,
} from "./pages";

const rootRoute = new RootRoute({
  component: Root,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const ourCompanyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/ourCompany",
  component: OurCompany,
});

const locationsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/locations",
  component: Locations,
});
const AppRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/appDesign",
  component: AppDesign,
});
const WebRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/webDesign",
  component: WebDesign,
});
const GraphicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/graphicDesign",
  component: GraphicDesign,
});

const ContactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/Contact",
  component: Contact,
});
// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  homeRoute,
  ourCompanyRoute,
  locationsRoute,
  AppRoute,
  WebRoute,
  GraphicRoute,
  ContactRoute,
]);

// Create the router using your route tree
const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
