import { memo } from 'react';
import { Link } from '@tanstack/react-router';
import ViewListIcon from '@mui/icons-material/ViewList';
import UndoIcon from '@mui/icons-material/Undo';
import { useHeaderTexts } from '../../hooks/useTexts';
import TextDisplay from './TextDisplay';

// メニューボタンコンポーネント（メモ化）
const MenuButton = memo(() => {
  const headerTexts = useHeaderTexts();

  return (
    <button
      className='common_header_button_menu'
      title={headerTexts.MENU_BUTTON_TITLE}
    >
      <ViewListIcon />
    </button>
  );
});

MenuButton.displayName = 'MenuButton';

// 戻るボタンコンポーネント（メモ化）
const BackButton = memo(() => {
  const headerTexts = useHeaderTexts();

  return (
    <Link
      to='/'
      className='common_header_button_back'
      title={headerTexts.BACK_BUTTON_TITLE}
    >
      <UndoIcon />
    </Link>
  );
});

BackButton.displayName = 'BackButton';

// ページタイトルコンポーネント（メモ化）
const PageTitle = memo<{ title: string }>(({ title }) => {
  return (
    <TextDisplay text={title} className='common_header_text_title' as='h1' />
  );
});

PageTitle.displayName = 'PageTitle';

// 共通ヘッダーコンポーネント（メモ化）
interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header = memo<HeaderProps>(({ title, showBackButton = false }) => {
  return (
    <header className='common_header_layout'>
      <MenuButton />
      {showBackButton && <BackButton />}
      <PageTitle title={title} />
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
