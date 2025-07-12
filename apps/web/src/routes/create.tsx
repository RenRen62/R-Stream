import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components';

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header
        title='R-Streamを新規作成する'
        showBackButton={true}
        onBackClick={() => window.history.back()}
      />

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
