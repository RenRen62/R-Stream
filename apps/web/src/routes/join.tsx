import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components';

const Join: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header>R-Streamに参加する</Header>

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
