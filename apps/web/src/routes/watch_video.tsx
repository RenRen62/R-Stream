import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Header, QuestionSection } from '../components';

// ボタンの状態（ファシリテータ/リスナー/未選択）
type ButtonState = 'facilitator' | 'listener' | 'nochoice';

// メインコンポーネント
const WatchVideo: React.FC = () => {
  // 各選択肢の初期値を定義（nullは未選択を表す）
  type QuestionKey = 'facilitator' | 'videoPreparer';
  type FacilitatorChoice = 'me' | 'other';
  type VideoPreparerChoice = 'me' | 'other';

  const QUESTION_LABELS: Record<QuestionKey, string> = {
    facilitator: '誰がファシリテータをする？',
    videoPreparer: '誰が動画を準備する？'
  };
  const FACILITATOR_OPTIONS: Record<FacilitatorChoice, string> = {
    me: '私がします',
    other: '別の人に依頼します'
  };
  const VIDEO_PREPARER_OPTIONS: Record<VideoPreparerChoice, string> = {
    me: '私が用意します',
    other: '別の人に用意してもらいます'
  };

  // 各選択肢の状態を管理
  const [facilitator, setFacilitator] = useState<FacilitatorChoice | null>(
    null
  );
  const [videoPreparer, setVideoPreparer] =
    useState<VideoPreparerChoice | null>(null);

  // 各ボタンの状態を判定
  const getButtonState = (): ButtonState => {
    // 両方の選択が完了していない場合は未選択状態
    if (!facilitator || !videoPreparer) return 'nochoice';
    // ファシリテータの選択に基づいて遷移先を決定（videoPreparerは遷移先に影響しない）
    return facilitator === 'me' ? 'facilitator' : 'listener';
  };

  // 各ボタンテキストの取得
  const getButtonText = (): string => {
    const buttonState = getButtonState();

    switch (buttonState) {
      case 'facilitator':
        return 'ファシリテータ画面へGO！';
      case 'listener':
        return 'リスナー画面へGO！';
      case 'nochoice':
        return '選択を完了してください';
      default:
        return '';
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
          question={QUESTION_LABELS.facilitator}
          options={Object.values(FACILITATOR_OPTIONS)}
          selectedValue={facilitator ? FACILITATOR_OPTIONS[facilitator] : null}
          onSelect={(value: string) =>
            setFacilitator(
              (Object.entries(FACILITATOR_OPTIONS).find(
                ([, option]) => option === value
              )?.[0] as FacilitatorChoice) || null
            )
          }
        />
        {/* 動画準備者選択セクション */}
        <QuestionSection
          question={QUESTION_LABELS.videoPreparer}
          options={Object.values(VIDEO_PREPARER_OPTIONS)}
          selectedValue={
            videoPreparer ? VIDEO_PREPARER_OPTIONS[videoPreparer] : null
          }
          onSelect={(value: string) =>
            setVideoPreparer(
              Object.entries(VIDEO_PREPARER_OPTIONS).find(
                ([, option]) => option === value
              )?.[0] as VideoPreparerChoice | null
            )
          }
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
