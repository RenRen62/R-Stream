import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components';

const WatchVideo: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='動画聴講モード' />

      <main className='flex flex-1 items-center justify-center p-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-2xl font-bold text-gray-800'>
            動画聴講モードを開始する
          </h2>
          <p className='text-gray-600'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/watch_video')({
  component: WatchVideo
});
