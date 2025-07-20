import { createFileRoute, Link } from '@tanstack/react-router';
import { Header } from '../components';
import { Plus, Users } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='R-Stream' />

      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamへようこそ！</p>
          <p>セッションを開始するか、既存のセッションに参加してください</p>
        </div>

        <nav className='flex w-full max-w-md flex-col gap-4'>
          <Link
            to='/create'
            search={{ from: '/' }}
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <Plus />
            <span>R-Streamを新規作成する</span>
          </Link>

          <Link
            to='/join'
            search={{ from: '/' }}
            className='flex items-center justify-center gap-3 rounded-lg bg-gray-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-gray-700'
          >
            <Users />
            <span>既存のR-Streamに参加する</span>
          </Link>
        </nav>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
