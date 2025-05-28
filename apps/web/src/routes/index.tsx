import { createFileRoute, Navigate } from '@tanstack/react-router';

const Index: React.FC = () => {
  return <Navigate to='/login' replace />;
};

export const Route = createFileRoute('/')({
  component: Index
});
