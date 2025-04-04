import React from 'react'; // Import React for JSX
import { createRoot } from 'react-dom/client'; // Import ReactDOM for rendering
import './index.css'; // Import global styles
import { routeTree } from './routeTree.gen'; // Import the route tree
import { RouterProvider, createRouter } from '@tanstack/react-router'; // Import TanStack Router

// Create a new router instance
const router = createRouter({ routeTree });

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element with ID 'root' not found."); // Log an error instead of throwing
} else {
  createRoot(rootElement).render(
    <React.StrictMode> {/* Use StrictMode for development */}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


