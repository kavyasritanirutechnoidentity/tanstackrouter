import { createFileRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import Landing from "../pages/Landing";
import React from "react";
import App from "../App";

// Define route
const landingRoute = createFileRoute("/")({
  component: App,
  loader: async () => {
    // Prefetch data before page load
    const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
    return res.json();
  },
});

// Create router instance
const router = createRouter({ routeTree: landingRoute });

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
