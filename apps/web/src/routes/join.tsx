import { createFileRoute } from '@tanstack/react-router';
import { useJoinTexts } from '../hooks/useTexts';
import { Header, MainContent } from '../components/common/index';

const Join: React.FC = () => {
  const joinTexts = useJoinTexts();

  return (
    <div className='common_background_layout'>
      <Header title={joinTexts.PAGE_TITLE} showBackButton={true} />

      <MainContent
        heading={joinTexts.HEADING}
        description={joinTexts.DESCRIPTION}
      />
    </div>
  );
};

export const Route = createFileRoute('/join')({
  component: Join
});
