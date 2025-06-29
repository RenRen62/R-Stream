import { createFileRoute, Link } from '@tanstack/react-router';
import { memo } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import UndoIcon from '@mui/icons-material/Undo';

// 戻るボタンコンポーネント（メモ化）
const BackButton = memo(() => (
  <Link to='/' className='common_header_button_back' title='トップページに戻る'>
    <UndoIcon />
  </Link>
));

BackButton.displayName = 'BackButton';

const Join: React.FC = () => {
  return (
    <div className='common_background_layout'>
      {/* ヘッダーセクション */}
      <header className='common_header_layout'>
        <button className='common_header_button_menu' title='メニューを開く'>
          <ViewListIcon />
        </button>

        <BackButton />

        <h1 className='common_header_text_title'>R-Streamに参加する</h1>
      </header>

      <main className='common_main_layout_center'>
        <div className='common_main_content_center'>
          <h2 className='common_main_text_heading'>既存のR-Streamに参加する</h2>
          <p className='common_main_text_description'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/join')({
  component: Join
});
