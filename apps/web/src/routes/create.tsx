import { createFileRoute } from '@tanstack/react-router';

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* ヘッダーセクション */}
      {/* あとでメニューを追加実装する */}
      <header className='flex items-center justify-between bg-blue-950 px-4 py-3'>
        <h1 className='text-xl font-bold text-white'>R-Streamを新規作成する</h1>
      </header>

      <main className='flex flex-1 items-center justify-center p-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-2xl font-bold text-gray-800'>
            R-Streamを新規作成する
          </h2>
          <p className='text-gray-600'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
