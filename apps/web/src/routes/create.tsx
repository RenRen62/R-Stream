import { createFileRoute } from '@tanstack/react-router';

const Create: React.FC = () => {
  return (
    <div className='common_background_layout'>
      {/* ヘッダーセクション */}
      {/* あとでメニューを追加実装する */}
      <header className='common_header_layout'>
        <h1 className='common_header_text_title'>R-Streamを新規作成する</h1>
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
