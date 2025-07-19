import { createFileRoute } from '@tanstack/react-router';
import { Header, ModeButton } from '../components';
import { Speech, TvMinimalPlay, MessagesSquare } from 'lucide-react';

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='R-Streamを新規作成する' />

      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamを新規作成する</p>
          <p>シチュエーションに応じて、下記モードを選択してね</p>
        </div>
        <div className='flex flex-col gap-4'>
          <ModeButton
            to='/presentation'
            text='プレゼンテーションモードを作成する'
            icon={<Speech className='h-6 w-6 text-white' />}
          />
          <ModeButton
            to='/watch_video'
            text='動画聴講モードを作成する'
            icon={<TvMinimalPlay className='h-6 w-6 text-white' />}
          />
          <ModeButton
            to='/discussion'
            text='ディスカッションモードを作成する'
            icon={<MessagesSquare className='h-6 w-6 text-white' />}
          />
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
