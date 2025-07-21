// 動画聴講モードの選択画面
// - ファシリテータ/動画準備者の2択UI
// - 状態（facilitator, videoPreparer）→導出値（buttonState）→UI変化
// - useMemoで状態依存の導出値を最適化・明示化
// - 型安全性・アクセシビリティ・UI/UXに配慮

import { useState, useMemo } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { RadioGroup } from '../components/ui/radio-group';
import { Header } from '../components/Header';
import { ChoiceCard } from '../components';

// メインコンポーネント
const WatchVideo: React.FC = () => {
  type ButtonState = 'facilitator' | 'listener' | 'nochoice';
  type FacilitatorChoice = 'me' | 'other';
  type VideoPreparerChoice = 'me' | 'other';

  // 選択肢の状態管理（nullは初期値の未選択状態）
  const [facilitator, setFacilitator] = useState<FacilitatorChoice | null>(
    null
  );
  const [videoPreparer, setVideoPreparer] =
    useState<VideoPreparerChoice | null>(null);

  // ボタンの状態を導出
  const buttonState: ButtonState = useMemo((): ButtonState => {
    if (!facilitator || !videoPreparer) return 'nochoice';
    return facilitator === 'me' ? 'facilitator' : 'listener';
  }, [facilitator, videoPreparer]);

  // ボタンテキストの動的生成
  const getButtonText = (): string => {
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

  // ボタンのクリック時の遷移処理（現状はダイアログ表示にのみ使用）
  const handleSubmit = () => {
    if (buttonState === 'nochoice') return;
    const screenName =
      buttonState === 'facilitator' ? 'ファシリテータ' : 'リスナー';
    console.log(`遷移先：${buttonState}画面`);
    alert(`${screenName}画面に遷移します Coming soon...`);
  };

  // ボタンの有効/無効判定
  const isButtonEnabled = buttonState !== 'nochoice';

  return (
    <div className='min-h-screen'>
      <Header title='動画聴講モードで開始する' />
      <main className='mb-8 flex flex-col items-center p-8'>
        {/* ファシリテータ選択セクション（2択ラジオ） */}
        <div className='mb-4 rounded-lg p-4 text-center'>
          <h2 className='text-lg font-semibold text-gray-800'>
            誰がファシリテータをする？
          </h2>
          <RadioGroup
            value={facilitator}
            onValueChange={(v) => setFacilitator(v as FacilitatorChoice)}
            className='flex justify-center gap-4'
          >
            <ChoiceCard
              selected={facilitator === 'me'}
              label='私がします'
              onClick={() => setFacilitator('me')}
              radioId='facilitator-me'
              radioValue='me'
            />
            <ChoiceCard
              selected={facilitator === 'other'}
              label='別の人に依頼します'
              onClick={() => setFacilitator('other')}
              radioId='facilitator-other'
              radioValue='other'
            />
          </RadioGroup>
        </div>

        {/* 動画準備者選択セクション（2択ラジオ） */}
        <div className='mb-4 rounded-lg p-4 text-center'>
          <h2 className='text-lg font-semibold text-gray-800'>
            誰が動画を準備する？
          </h2>
          <RadioGroup
            value={videoPreparer}
            onValueChange={(v) => setVideoPreparer(v as VideoPreparerChoice)}
            className='flex justify-center gap-4'
          >
            <ChoiceCard
              selected={videoPreparer === 'me'}
              label='私がします'
              onClick={() => setVideoPreparer('me')}
              radioId='video-preparer-me'
              radioValue='me'
            />
            <ChoiceCard
              selected={videoPreparer === 'other'}
              label='別の人に用意してもらいます'
              onClick={() => setVideoPreparer('other')}
              radioId='video-preparer-other'
              radioValue='other'
            />
          </RadioGroup>
        </div>

        {/* 決定ボタン（状態依存で有効/無効・テキスト切り替え） */}
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

// ルートの定義（@tanstack/react-router用）
export const Route = createFileRoute('/watch_video')({
  component: WatchVideo
});
