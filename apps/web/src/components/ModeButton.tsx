import { Link } from '@tanstack/react-router';
import { Speech, TvMinimalPlay, MessagesSquare } from 'lucide-react';

type ModeButtonProps = {
  to: string; // 遷移先パス
  icon: React.ReactNode; // アイコン
  children: React.ReactNode; // テキスト
};

// ボタンコンポーネント
const ModeButton: React.FC<ModeButtonProps> = ({ to, icon, children }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
};

// 各モード用のエクスポート関数 //////////////////////////////////////////////////////

// プレゼンテーションモードボタン
export const PresentationModeButton = () => (
  <ModeButton
    to='/presentation'
    icon={<Speech className='h-6 w-6 text-white' />}
  >
    プレゼンテーションモードを作成する
  </ModeButton>
);

// 動画聴講モードボタン
export const WatchVideoModeButton = () => (
  <ModeButton
    to='/watch_video'
    icon={<TvMinimalPlay className='h-6 w-6 text-white' />}
  >
    動画聴講モードを作成する
  </ModeButton>
);

// ディスカッションモードボタン
export const DiscussionModeButton = () => (
  <ModeButton
    to='/discussion'
    icon={<MessagesSquare className='h-6 w-6 text-white' />}
  >
    ディスカッションモードを作成する
  </ModeButton>
);

export { ModeButton };
