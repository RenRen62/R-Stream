import { createFileRoute, Link } from '@tanstack/react-router';
import { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import { useHeaderTexts, useHomeTexts } from '../hooks/useTexts';
import { Header, MainContent, TextDisplay } from '../components/common/index';

// ウェルカムメッセージコンポーネント（メモ化）
const WelcomeMessage = memo(() => {
  const homeTexts = useHomeTexts();

  return (
    <div className='home_main_content_welcome'>
      <TextDisplay
        text={homeTexts.WELCOME_TITLE}
        className='home_main_text_welcome'
      />
      <TextDisplay text={homeTexts.WELCOME_DESCRIPTION} />
    </div>
  );
});

WelcomeMessage.displayName = 'WelcomeMessage';

// ボタンリストコンポーネント（メモ化）
const ButtonList = memo(() => {
  const homeTexts = useHomeTexts();

  return (
    <div className='home_main_button_list'>
      <Link to='/create' className='home_main_button_new-R-Stream'>
        <AddIcon />
        <span>{homeTexts.CREATE_BUTTON_TEXT}</span>
      </Link>

      <Link to='/join' className='home_main_button_join-R-Stream'>
        <GroupIcon />
        <span>{homeTexts.JOIN_BUTTON_TEXT}</span>
      </Link>
    </div>
  );
});

ButtonList.displayName = 'ButtonList';

const Index: React.FC = () => {
  const headerTexts = useHeaderTexts();

  return (
    <div className='common_background_layout'>
      <Header title={headerTexts.APP_TITLE} />

      <MainContent layout='column'>
        <WelcomeMessage />
        <ButtonList />
      </MainContent>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Index
});
