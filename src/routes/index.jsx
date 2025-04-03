// // import { createFileRoute } from "@tanstack/react-router";
// // import App from "../App";

// // // Define route
// // export const Route = createFileRoute("/")({
// //   component: App,
// //   loader: async () => {
// //     // Prefetch data before page load
// //     const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
// //     return res.json();
// //   },
// // });
// import { createFileRoute } from "@tanstack/react-router";
// import App from "../App";

// // Define route
// export const Route = createFileRoute("/")({
//   component: App,
//   loader: async () => {
//     // Prefetch data before page load
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
//     return res.json();
//   },
// });
import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

// Define route
export const Route = createFileRoute("/")({
  component: App,
  loader: async () => {
    try {
      // Prefetch data before page load
      const res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }
      return await res.json(); // Ensure `await` is used
    } catch (error) {
      console.error("Error in loader:", error); // Log the error
      return []; // Return an empty array as a fallback
    }
  },
});