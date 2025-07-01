import { memo } from 'react';

// テキスト表示用の共通コンポーネント（メモ化）
interface TextDisplayProps {
  text: string;
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const TextDisplay = memo<TextDisplayProps>(({ text, className, as = 'p' }) => {
  const Component = as;

  return <Component className={className}>{text}</Component>;
});

TextDisplay.displayName = 'TextDisplay';

export default TextDisplay;
