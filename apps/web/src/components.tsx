import { useState } from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';

interface HeaderProps {
  title: string;
}

export { Header };

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen((prev: boolean) => !prev);

  return (
    <>
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        <button
          className='flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors duration-200 hover:bg-blue-900'
          onClick={handleMenuClick}
        >
          <ViewListIcon />
        </button>
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
