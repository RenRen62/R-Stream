import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

function RootLayout() {
  return <Outlet />;
}

export const Route = createRootRouteWithContext()({
  component: RootLayout
});
