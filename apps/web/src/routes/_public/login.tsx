import { createFileRoute, useRouter } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/login')({
  component: RouteComponent
});

function RouteComponent() {
  const router = useRouter();
  return (
    <div>
      <h2 className='text-2xl text-red-500'>ログインページ</h2>
      <button
        className='mt-4 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600'
        onClick={() => router.navigate({ to: '/home' })}
      >
        ログイン
      </button>
    </div>
  );
}
