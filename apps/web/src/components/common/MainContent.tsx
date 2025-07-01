import { memo } from 'react';
import TextDisplay from './TextDisplay';

// メインコンテンツコンポーネント（メモ化）
interface MainContentProps {
  heading?: string;
  description?: string;
  layout?: 'center' | 'column';
  children?: React.ReactNode;
}

const MainContent = memo<MainContentProps>(
  ({ heading, description, layout = 'center', children }) => {
    const layoutClass =
      layout === 'center'
        ? 'common_main_layout_center'
        : 'common_main_layout_column';

    return (
      <main className={layoutClass}>
        {children || (
          <div className='common_main_content_center'>
            {heading && (
              <TextDisplay
                text={heading}
                className='common_main_text_heading'
                as='h2'
              />
            )}
            {description && (
              <TextDisplay
                text={description}
                className='common_main_text_description'
              />
            )}
          </div>
        )}
      </main>
    );
  }
);

MainContent.displayName = 'MainContent';

export default MainContent;
