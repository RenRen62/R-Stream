import React from 'react';
import { useTexts } from '../../hooks/useTexts';

type TextDisplayProps = {
  textKey: keyof ReturnType<typeof useTexts>;
  className?: string;
};

const TextDisplayComponent: React.FC<TextDisplayProps> = ({
  textKey,
  className
}) => {
  const texts = useTexts();
  return <span className={className}>{texts[textKey]}</span>;
};

export const TextDisplay = React.memo(TextDisplayComponent);
