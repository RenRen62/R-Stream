import { createFileRoute } from '@tanstack/react-router';
import { useCreateTexts } from '../hooks/useTexts';
import { Header, MainContent } from '../components/common/index';

const Create: React.FC = () => {
  const createTexts = useCreateTexts();

  return (
    <div className='common_background_layout'>
      <Header title={createTexts.PAGE_TITLE} showBackButton={true} />

      <MainContent
        heading={createTexts.HEADING}
        description={createTexts.DESCRIPTION}
      />
    </div>
  );
};

export const Route = createFileRoute('/create')({
  component: Create
});
