import React from 'react';

// 選択肢ボタンの型定義
type ChoiceButtonProps = {
  text: string;
  isSelected: boolean;
  onClick: () => void;
};

// 選択肢ボタンコンポーネント
export const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  text,
  isSelected,
  onClick
}) => (
  <button
    className={`flex-1 rounded-lg border-2 p-4 text-center font-medium ${
      isSelected
        ? 'border-blue-600 bg-blue-50 text-blue-700'
        : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);
