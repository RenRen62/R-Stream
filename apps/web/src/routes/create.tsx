import { createFileRoute, Link } from '@tanstack/react-router';
import { Header } from '../components';
import PresentationIcon from '@mui/icons-material/CoPresent';
import WatchVideoIcon from '@mui/icons-material/Duo';
import DiscussionIcon from '@mui/icons-material/Forum';

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='R-Streamを新規作成する' />

      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamを新規作成する</p>
          <p>シチュエーションに応じて、下記モードを選択してね</p>
        </div>

        <div className='flex w-full max-w-md flex-col gap-4'>
          <Link
            to='/presentation'
            search={{ from: '/create' }}
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <PresentationIcon />
            <span>プレゼンテーションモードを作成する</span>
          </Link>

          <Link
            to='/watch_video'
            search={{ from: '/create' }}
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <WatchVideoIcon />
            <span>動画聴講モードを作成する</span>
          </Link>

          <Link
            to='/discussion'
            search={{ from: '/create' }}
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <DiscussionIcon />
            <span>ディスカッションモードを作成する</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
