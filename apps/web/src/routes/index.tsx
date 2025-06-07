import { createFileRoute } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';
const Index: React.FC = () => {
  return (
    /* 画面全体を覆うコンテナ
     * min-h-screen: 画面の高さいっぱいに設定
     */
    <div className='min-h-screen'>
      {/* ヘッダーセクション */}
      {/* bg-blue-950: 濃い青色の背景色を設定 */}
      <header className='flex bg-blue-950 py-5 pl-2'>
        <button className='text-white'>
          <ViewListIcon />
        </button>
      </header>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
