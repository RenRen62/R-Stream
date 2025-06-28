import { createFileRoute, Link } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';

const Index: React.FC = () => {
  return (
    /* 画面全体を覆うコンテナ
     * min-h-screen: 画面の高さいっぱいに設定
     */
    <div className='min-h-screen'>
      {/* ヘッダーセクション */}
      {/* bg-blue-950: 濃い青色の背景色を設定 */}
      {/* items-center: 縦方向の中央揃え */}
      {/* justify-between: 横方向の要素を両端に配置 */}
      {/* px-4: 横幅を設定 */}
      {/* py-3: 縦幅を設定 */}
      <header className='flex items-center justify-between bg-blue-950 px-4 py-3'>
        {/* 左側のアイコンボタン */}
        {/* cursor-pointer: ホバー時に指マークに変更 */}
        {/* hover:bg-blue-900: ホバー時に少し明るい青色に */}
        {/* transition-colors duration-200: 色の変化をスムーズに */}
        {/* rounded-lg: 角を丸く */}
        {/* p-2: 内側に余白を追加してホバーエリアを広げる */}
        {/* flex items-center justify-center: アイコンを中央に配置 */}
        <button className='flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors duration-200 hover:bg-blue-900'>
          <ViewListIcon />
        </button>

        {/* 中央のタイトル */}
        <h1 className='text-xl font-bold text-white'>R-Stream</h1>
        {/* 右側のスペーサー（左側のメニューアイコン分のスペースを置き、左右対称にする) */}
        <div className='w-6'></div>
      </header>

      {/* メインコンテンツエリア */}
      {/* flex-1: 残りの空間を全て使用 */}
      {/* flex flex-col: 縦方向のFlexboxレイアウト */}
      {/* items-center: 横方向の中央揃え */}
      {/* justify-center: 縦方向の中央揃え */}
      {/* p-8: 内側の余白 */}
      <main className='flex flex-1 flex-col items-center justify-center p-8'>
        {/* ウェルカムメッセージ */}
        <div className='mb-8 text-center text-gray-600'>
          <p className='mb-4 text-lg'>R-Streamへようこそ！</p>
          <p>セッションを開始するか、既存のセッションに参加してください。</p>
        </div>

        {/* ボタンコンテナ */}
        {/* flex flex-col: 縦方向のFlexboxレイアウト */}
        {/* gap-4: ボタン間の間隔 */}
        <div className='flex w-full max-w-md flex-col gap-4'>
          {/* 新規作成ボタン */}
          <Link
            to='/create'
            className='flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-blue-700'
          >
            <AddIcon />
            <span>R-Streamを新規作成する</span>
          </Link>

          {/* 参加ボタン */}
          <Link
            to='/join'
            className='flex items-center justify-center gap-3 rounded-lg bg-gray-600 px-6 py-4 font-semibold text-white transition-colors duration-200 hover:bg-gray-700'
          >
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
