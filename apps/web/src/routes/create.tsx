import { createFileRoute } from '@tanstack/react-router';
import { Header, ModeButton } from '../components';
import { Speech, TvMinimalPlay, MessagesSquare } from 'lucide-react';

// モードデータの定義
const MODE_DATA = [
  {
    id: 'presentation',
    text: 'プレゼンテーションモードを作成する',
    to: '/presentation',
    icon: <Speech />
  },
  {
    id: 'watch_video',
    text: '動画聴講モードを作成する',
    to: '/watch_video',
    icon: <TvMinimalPlay />
  },
  {
    id: 'discussion',
    text: 'ディスカッションモードを作成する',
    to: '/discussion',
    icon: <MessagesSquare />
  }
] as const; // モードデータを定数として外部化（再利用性向上）

const Create: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header title='R-Streamを新規作成する' />
      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamを新規作成する</p>
          <p>シチュエーションに応じて、下記モードを選択してね</p>
        </div>
        {/* モードボタン */}
        <nav className='flex flex-col gap-4'>
          {MODE_DATA.map((mode) => (
            <ModeButton
              key={mode.id}
              text={mode.text}
              to={mode.to}
              icon={mode.icon}
            />
          ))}
        </nav>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
