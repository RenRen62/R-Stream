import React from 'react';
import { ChoiceButton } from '../components/ChoiceButton';

// 質問セクションの型定義
type QuestionSectionProps = {
  question: string;
  options: readonly string[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
};

// 質問セクションコンポーネント
export const QuestionSection: React.FC<QuestionSectionProps> = ({
  question,
  options,
  selectedValue,
  onSelect
}) => (
  <div className='mb-4 rounded-lg p-4 text-center'>
    <h2 className='text-lg font-semibold text-gray-800'>{question}</h2>
    <div className='mt-4 flex gap-4'>
      {options.map((option) => (
        <ChoiceButton
          key={option}
          text={option}
          isSelected={selectedValue === option}
          onClick={() => onSelect(option)}
        />
      ))}
    </div>
  </div>
);
