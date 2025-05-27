import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/home')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      <h2>ホームページ</h2>
    </div>
  );
}
