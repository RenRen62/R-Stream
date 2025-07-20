import { createFileRoute } from '@tanstack/react-router';
import { Header, ModeButton } from '../components';
import { Speech, TvMinimalPlay, MessagesSquare } from 'lucide-react';
import { useMemo } from 'react';

// モードデータの型定義
type ModeData = {
  readonly id: string; // 一意の識別子(Primary key)
  readonly text: string;
  readonly to: string;
  readonly icon: React.ReactNode;
};

// モードデータの定義
const MODE_DATA: readonly ModeData[] = [
  {
    id: 'presentation',
    text: 'プレゼンテーションモードを作成する',
    to: '/presentation',
    icon: <Speech className='h-6 w-6 text-white' />
  },
  {
    id: 'watch_video',
    text: '動画聴講モードを作成する',
    to: '/watch_video',
    icon: <TvMinimalPlay className='h-6 w-6 text-white' />
  },
  {
    id: 'discussion',
    text: 'ディスカッションモードを作成する',
    to: '/discussion',
    icon: <MessagesSquare className='h-6 w-6 text-white' />
  }
] as const; // モードデータを定数として外部化（再利用性向上）

const Create: React.FC = () => {
  // useMemoで不要な再レンダリングを防止
  const modeData = useMemo(() => MODE_DATA, []);

  // エラーハンドリング
  if (!modeData || modeData.length === 0) {
    // エラーメッセージを表示
    return (
      <div className='min-h-screen'>
        <Header title='R-Streamを新規作成する' />
        <main className='flex flex-1 flex-col items-center justify-center p-8'>
          <div className='mb-8 text-center text-gray-600'>
            <p className='mb-4 text-lg'>R-Streamを新規作成する</p>
            <p>シチュエーションに応じて、下記モードを選択してね</p>
          </div>
          {/* エラーメッセージ */}
          <p className='text-center text-red-500'>
            モードの読み込みに失敗しました
          </p>
        </main>
      </div>
    );
  }
  // 正常な場合
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
          {modeData.map((mode) => (
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
