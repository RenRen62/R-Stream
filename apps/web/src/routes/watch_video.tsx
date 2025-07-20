import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../components';

// 選択肢の型
type Question = '誰がファシリテータをする？' | '誰が動画を準備する？';
type Choice =
  | '私がします'
  | '別の人に依頼します'
  | '私が用意します'
  | '別の人に用意してもらいます';
type NextButtonText =
  | 'ファシリテータ画面へGO！'
  | 'リスナー画面へGO！'
  | '選択を完了してください';

// コンポーネントの型
type ChoiceButtonProps = {
  text: Choice;
  isSelected: boolean;
  onClick: () => void;
};

// 質問セクションの型
type QuestionSectionProps = {
  question: Question;
  options: readonly Choice[];
  selectedValue: Choice | null;
  onSelect: (value: Choice) => void;
};

// ボタンの状態（ファシリテータ/リスナー/未選択）
type ButtonState = 'facilitator' | 'listener' | 'nochoice';

// 選択肢ボタンコンポーネント
const ChoiceButton: React.FC<ChoiceButtonProps> = ({
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

// 質問セクションコンポーネント
const QuestionSection: React.FC<QuestionSectionProps> = ({
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

// メインコンポーネント
const WatchVideo: React.FC = () => {
  // 各選択肢の初期値を定義（nullは未選択を表す）
  const [choices, setChoices] = useState({
    facilitator: null as '私がします' | '別の人に依頼します' | null,
    videoPreparer: null as
      | '私が用意します'
      | '別の人に用意してもらいます'
      | null
  });

  // 各選択肢の状態を更新
  const handleChoice = (
    type: 'facilitator' | 'videoPreparer',
    choice: Choice
  ) => {
    setChoices((prev) => ({ ...prev, [type]: choice }));
  };

  // 各ボタンの状態を判定
  const getButtonState = (): ButtonState => {
    // 両方の選択が完了していない場合は未選択状態
    if (!choices.facilitator || !choices.videoPreparer) {
      return 'nochoice';
    }
    // ファシリテータの選択に基づいて遷移先を決定（videoPreparerは遷移先に影響しない）
    return choices.facilitator === '私がします' ? 'facilitator' : 'listener';
  };

  // 各ボタンテキストの取得
  const getButtonText = (): NextButtonText => {
    const buttonState = getButtonState();

    switch (buttonState) {
      case 'facilitator':
        return 'ファシリテータ画面へGO！';
      case 'listener':
        return 'リスナー画面へGO！';
      case 'nochoice':
        return '選択を完了してください';
    }
  };

  // ボタンのクリックハンドラー
  const handleSubmit = () => {
    const buttonState = getButtonState();

    if (buttonState === 'nochoice') return;

    const screenName =
      buttonState === 'facilitator' ? 'ファシリテータ' : 'リスナー';
    console.log(`遷移先：${buttonState}画面`);
    alert(`${screenName}画面に遷移します Coming soon...`);
  };

  // ボタンの有効性判定
  const isButtonEnabled = getButtonState() !== 'nochoice';

  return (
    <div className='min-h-screen'>
      <Header title='動画聴講モードで開始する' />
      <main className='mb-8 flex flex-col items-center p-8'>
        {/* ファシリテータ選択セクション */}
        <QuestionSection
          question='誰がファシリテータをする？'
          options={['私がします', '別の人に依頼します']}
          selectedValue={choices.facilitator}
          onSelect={(value) => handleChoice('facilitator', value)}
        />
        {/* 動画準備者選択セクション */}
        <QuestionSection
          question='誰が動画を準備する？'
          options={['私が用意します', '別の人に用意してもらいます']}
          selectedValue={choices.videoPreparer}
          onSelect={(value) => handleChoice('videoPreparer', value)}
        />
        {/* ボタンセクション */}
        <div className='mb-8'>
          <div className='mb-4 rounded-lg p-4'>
            <button
              className={`w-full rounded-lg p-4 text-center font-medium ${
                isButtonEnabled
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'cursor-not-allowed bg-gray-400 text-gray-600'
              }`}
              onClick={handleSubmit}
              disabled={!isButtonEnabled}
            >
              {getButtonText()}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// ルートの定義
export const Route = createFileRoute('/watch_video')({
  component: WatchVideo
});
