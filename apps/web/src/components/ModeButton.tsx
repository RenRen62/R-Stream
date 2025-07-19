import { Link } from '@tanstack/react-router';
import { Speech, Video, MessagesSquare } from 'lucide-react';

type ModeButtonProps = {
  to: string; // 遷移先パス
  text: string; // ボタンテキスト
  children: React.ReactNode; // アイコン
};

// ボタンコンポーネント
const ModeButton: React.FC<ModeButtonProps> = ({ to, text, children }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700`}
    >
      {children}
      <span>{text}</span>
    </Link>
  );
};

// 各モード用のエクスポート関数 //////////////////////////////////////////////////////

// プレゼンテーションモードボタン
export const PresentationModeButton = () => (
  <ModeButton to='/presentation' text='プレゼンテーションモードを作成する'>
    <Speech className='h-6 w-6 text-white' />
  </ModeButton>
);

// 動画聴講モードボタン
export const WatchVideoModeButton = () => (
  <ModeButton to='/watch_video' text='動画聴講モードを作成する'>
    <Video className='h-6 w-6 text-white' />
  </ModeButton>
);

// ディスカッションモードボタン
export const DiscussionModeButton = () => (
  <ModeButton to='/discussion' text='ディスカッションモードを作成する'>
    <MessagesSquare className='h-6 w-6 text-white' />
  </ModeButton>
);

export { ModeButton };
