import { useState, memo } from 'react';
import { useRouter, useCanGoBack } from '@tanstack/react-router';
import { AlignLeft, ArrowLeft } from 'lucide-react';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = memo(({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleMenuClick = () => setIsMenuOpen((prev: boolean) => !prev);

  // 戻るボタンの表示判定
  const canGoBack = useCanGoBack();

  // ヘッダー左側のボタン一覧 -> map関数を使用するために配列で管理、オプションの有無によって動的に調整
  const leftButtons: ReadonlyArray<{
    icon: React.ComponentType;
    onClick: () => void;
    key: string;
  }> = [
    {
      // 1つ目のボタン：メニュー（常に表示）
      icon: AlignLeft,
      onClick: handleMenuClick,
      key: 'menu'
    },
    // 2つ目のボタン：戻るボタン（オプション）
    ...(canGoBack
      ? [
          {
            icon: ArrowLeft,
            onClick: () => router.history.back(),
            key: 'back'
          }
        ]
      : []) // 戻るボタンが不要の場合は表示しない
    // 3つ目のボタンはここに追加できる
  ];

  // ヘッダー左側のボタンの数を定義
  const leftButtonsCount: number = leftButtons.length;
  // ヘッダー左側のボタンの数に対応して、空白スペースを定義
  // ボタンの数を増やす場合は、gapTokens配列に'gap-n'を追加すること
  const gapTokens = ['gap-0', 'gap-1', 'gap-2'] as const;
  const gapTokensCount: number = gapTokens.length;
  type GapClass = (typeof gapTokens)[number];
  const getGapClass = (): GapClass => {
    // Math.min()はgapTokens追加忘れに備えたポカ避け
    const clampedIndex = Math.max(
      0,
      Math.min(leftButtonsCount - 1, gapTokensCount - 1)
    );
    return gapTokens[clampedIndex] as GapClass;
  };

  return (
    <>
      <header className='flex items-center bg-blue-950 px-4 py-2'>
        {/* 左端のアイコンまとまり - 表示するアイコンの個数に応じて間隔を調整 */}
        <div className={`flex items-center ${getGapClass()}`}>
          {leftButtons.map(({ icon: Icon, onClick, key }) => (
            <button
              key={key}
              className='flex cursor-pointer items-center justify-center rounded-full p-2 text-white transition-colors duration-200 hover:bg-blue-900'
              onClick={onClick}
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* 中央のタイトル */}
        <h1 className='flex-1 text-center text-xl font-bold text-white'>
          {title}
        </h1>
      </header>
      {isMenuOpen && (
        <div className='absolute top-12 left-0 z-10 w-48 bg-white p-4 shadow-lg'>
          <div>メニュー（仮）</div>
          <button
            className='mt-2 rounded bg-blue-600 px-4 py-2 text-white'
            onClick={() => setIsMenuOpen(false)}
          >
            閉じる
          </button>
        </div>
      )}
    </>
  );
});

export { Header };
