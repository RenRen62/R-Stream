import { Link } from '@tanstack/react-router';

type ModeButtonProps = {
  to: string; // 遷移先パス
  text: string; // テキスト
  icon: React.ReactNode; // アイコン
};

// ボタンコンポーネント
const ModeButton: React.FC<ModeButtonProps> = ({ to, text, icon }) => {
  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-1 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export { ModeButton };
