import { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
};

export { Header };

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackClick
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen((prev: boolean) => !prev);

  // 左側のボタン管理 - map関数を使用するために配列で管理、オプションの有無によって動的に調整
  const leftButtons = [
    {
      // 1つ目のボタン：メニュー（常に表示）
      icon: ViewListIcon,
      onClick: handleMenuClick,
      key: 'menu'
    },
    // 2つ目のボタン：戻るボタン（オプション）
    ...(showBackButton
      ? [
          {
            icon: ArrowBackIcon,
            onClick: onBackClick,
            key: 'back'
          }
        ]
      : []) // 戻るボタンが不要の場合は表示しない
    // 3つ目のボタンはここに追加できる
  ];

  // ボタン数に応じて間隔クラスを動的に決定
  const getGapClass = (buttonCount: number) => {
    if (buttonCount <= 1) return '';
    if (buttonCount === 2) return 'gap-1';
    return 'gap-2'; // 3個以上の場合
  };

  return (
    <>
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        {/* 左端のアイコンまとまり - 表示するアイコンの個数に応じて間隔を調整 */}
        <div className={`flex items-center ${getGapClass(leftButtons.length)}`}>
          {leftButtons.map(({ icon: Icon, onClick, key }) => (
            <button
              key={key}
              className='flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition-colors duration-200 hover:bg-blue-900'
              onClick={onClick}
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* 中央のタイトル */}
        <h1 className='flex-1 text-center text-xl font-bold text-white'>
          {title}
        </h1>
      </header>
      {isMenuOpen && (
        <div className='absolute top-12 left-0 z-10 w-48 bg-white p-4 shadow-lg'>
          <div>メニュー（仮）</div>
          <button
            className='mt-2 rounded bg-blue-600 px-4 py-2 text-white'
            onClick={() => setIsMenuOpen(false)}
          >
            閉じる
          </button>
        </div>
      )}
    </>
  );
};
