// なんかNavigateでログイン画面に誘導されてるっぽい気がしている
import { createFileRoute, Navigate } from '@tanstack/react-router';
import App from '../App';

const Index: React.FC = () => {
  const isLoggedIn = true; // この値を変えて、ログイン後の画面に誘導する

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />;
  }

  return <App />;
};

export const Route = createFileRoute('/')({
  component: Index
});
