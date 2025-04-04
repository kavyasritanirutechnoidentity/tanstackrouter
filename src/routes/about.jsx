import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  path: '/about', 
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about"!</div>;
}