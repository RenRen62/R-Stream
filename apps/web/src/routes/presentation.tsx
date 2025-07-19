import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components';

const Presentation: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='プレゼンテーションモード' />

      <main className='flex flex-1 items-center justify-center p-8'>
        <div className='text-center'>
          <h2 className='mb-4 text-2xl font-bold text-gray-800'>
            プレゼンテーションモードを開始する
          </h2>
          <p className='text-gray-600'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/presentation')({
  component: Presentation
});
