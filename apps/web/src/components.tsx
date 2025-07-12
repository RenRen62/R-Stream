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

  return (
    <>
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        {/* 左端のアイコンまとまり */}
        <div className='flex items-center gap-1'>
          <button
            className='flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition-colors duration-200 hover:bg-blue-900'
            onClick={handleMenuClick}
          >
            <ViewListIcon />
          </button>

          {showBackButton && (
            <button
              className='items-cente flex cursor-pointer justify-center rounded-full p-2 text-white transition-colors duration-200 hover:bg-blue-900'
              onClick={onBackClick}
            >
              <ArrowBackIcon />
            </button>
          )}
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
