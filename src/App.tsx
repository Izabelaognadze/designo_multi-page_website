import { Outlet, RootRoute, Route, Router, RouterProvider } from "@tanstack/react-router";
import { Home, OurCompany, locations, Contact } from "./pages"

const rootRoute = new RootRoute({
  component: Root,
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "./",
  component: Home,
});

const ourCompanyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "./ourCompany",
  component: OurCompany,
});

const locationsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "./locations",
  component: locations,
});

const ContactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "./Contact",
  component: Contact,
});
// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, ourCompanyRoute, locationsRoute, ContactRoute])

// Create the router using your route tree
const router = new Router({ routeTree })

// Register your router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function Root() {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return <RouterProvider router={router} />
}

export default App
