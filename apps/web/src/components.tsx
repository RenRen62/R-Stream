import ViewListIcon from '@mui/icons-material/ViewList';

interface HeaderProps {
  children: React.ReactNode;
  onMenuClick?: () => void;
}

export { Header };

const Header: React.FC<HeaderProps> = ({ children, onMenuClick }) => {
  return (
    <header className='flex items-center bg-blue-950 px-4 py-2'>
      <button
        className='flex cursor-pointer items-center justify-center rounded-lg p-2 text-white transition-colors duration-200 hover:bg-blue-900'
        onClick={onMenuClick}
      >
        <ViewListIcon />
      </button>

      <h1 className='flex-1 text-center text-xl font-bold text-white'>
        {children}
      </h1>
    </header>
  );
};
