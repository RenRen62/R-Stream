import { createFileRoute, Link } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';

const Index: React.FC = () => {
  return (
    <div className='common_background_layout'>
      <header className='common_header_layout'>
        <button className='common_header_button_menu'>
          <ViewListIcon />
        </button>

        <h1 className='common_header_text_title'>R-Stream</h1>
        {/* 右側のスペーサー（左側のメニューアイコン分のスペースを置き、左右対称にする) */}
        <div className='common_header_content_spacer'></div>
      </header>

      <main className='common_main_layout_column'>
        <div className='home_main_content_welcome'>
          <p className='home_main_text_welcome'>R-Streamへようこそ！</p>
          <p>セッションを開始するか、既存のセッションに参加してください。</p>
        </div>

        <div className='home_main_button_list'>
          <Link to='/create' className='home_main_button_new-R-Stream'>
            <AddIcon />
            <span>R-Streamを新規作成する</span>
          </Link>

          <Link to='/join' className='home_main_button_join-R-Stream'>
            <GroupIcon />
            <span>既存のR-Streamに参加する</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
