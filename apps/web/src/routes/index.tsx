import { createFileRoute, Link } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';

const Index: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        <button className='flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors duration-200 hover:bg-blue-900'>
          <ViewListIcon />
        </button>

        <h1 className='flex-1 text-center text-xl font-bold text-white'>
          R-Stream
        </h1>
      </header>

      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamへようこそ！</p>
          <p>セッションを開始するか、既存のセッションに参加してください。</p>
        </div>

        <div className='flex w-full max-w-md flex-col gap-4'>
          <Link
            to='/create'
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <AddIcon />
            <span>R-Streamを新規作成する</span>
          </Link>

          <Link
            to='/join'
            className='flex items-center justify-center gap-3 rounded-lg bg-gray-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-gray-700'
          >
            <GroupIcon />
            <span>既存のR-Streamに参加する</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
