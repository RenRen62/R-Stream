import { createFileRoute } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';

const Join: React.FC = () => {
  return (
    <div className='min-h-screen'>
      {/* ヘッダーセクション */}
      {/* あとでメニューを追加実装する */}
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        <button className='flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors duration-200 hover:bg-blue-900'>
          <ViewListIcon />
        </button>

        <h1 className='flex-1 text-center text-xl font-bold text-white'>
          R-Streamに参加する
        </h1>
      </header>

      <main className='flex flex-1 items-center justify-center p-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-2xl font-bold text-gray-800'>
            既存のR-Streamに参加する
          </h2>
          <p className='text-gray-600'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/join')({
  component: Join
});
