import { createFileRoute, useRouter } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent
});

function RouteComponent() {
  const router = useRouter();
  return (
    <div>
      <h2>ログインページ</h2>
      <button onClick={() => router.navigate({ to: '/home' })}>ログイン</button>
    </div>
  );
}
