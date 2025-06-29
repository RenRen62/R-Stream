import { createFileRoute } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';

const Create: React.FC = () => {
  return (
    <div className='common_background_layout'>
      {/* ヘッダーセクション */}
      <header className='common_header_layout'>
        <button className='common_header_button_menu'>
          <ViewListIcon />
        </button>

        <h1 className='common_header_text_title'>R-Streamを新規作成する</h1>
        {/* 右側のスペーサー（左側のメニューアイコン分のスペースを置き、左右対称にする) */}
        <div className='common_header_content_spacer'></div>
      </header>

      <main className='common_main_layout_center'>
        <div className='common_main_content_center'>
          <h2 className='common_main_text_heading'>R-Streamを新規作成する</h2>
          <p className='common_main_text_description'>この画面は開発中です</p>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
