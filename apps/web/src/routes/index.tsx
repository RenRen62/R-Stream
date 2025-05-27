import { createFileRoute, Navigate } from '@tanstack/react-router';

const Home: React.FC = () => {
  return <Navigate to='/login' replace />;
};

export const Route = createFileRoute('/')({
  component: Home
});
