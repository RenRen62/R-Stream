import { createFileRoute } from '@tanstack/react-router';
import {
  Header,
  PresentationModeButton,
  WatchVideoModeButton,
  DiscussionModeButton
} from '../components';

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='R-Streamを新規作成する' />

      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamを新規作成する</p>
          <p>シチュエーションに応じて、下記モードを選択してね</p>
        </div>
        <div className='space-y-4'>
          <PresentationModeButton />
          <WatchVideoModeButton />
          <DiscussionModeButton />
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
