import { createFileRoute } from '@tanstack/react-router';

const Join: React.FC = () => {
  return (
    <div className='common_background_layout'>
      {/* ヘッダーセクション */}
      {/* あとでメニューを追加実装する */}
      <header className='common_header_layout'>
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
