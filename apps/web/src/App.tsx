/**
 * R-Streamのメインアプリケーションコンポーネント
 *
 * このコンポーネントは以下の要素で構成されています：
 * - ヘッダー：アプリケーションのタイトルを表示
 *
 * @returns {JSX.Element} アプリケーションのルートコンポーネント
 */
import React from 'react';

const App: React.FC = () => {
  return (
    /* 画面全体を覆うコンテナ
     * min-h-screen: 画面の高さいっぱいに設定
     */
    <div className='min-h-screen'>
      {/* ヘッダーセクション */}
      {/* bg-blue-950: 濃い青色の背景色を設定 */}
      <header className='bg-blue-950'>
        {/* mx-auto: 左右のマージンを自動で中央寄せ
         * max-w-7xl: 最大幅を1280pxに設定
         * px-4: 左右のパディングを16pxに設定
         * py-6: 上下のパディングを24pxに設定
         * sm:px-6: 小さい画面サイズ以上で左右のパディングを24pxに設定
         * lg:px-8: 大きい画面サイズ以上で左右のパディングを32pxに設定
         */}
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
          {/* text-3xl: フォントサイズを30pxに設定
           * font-bold: フォントを太字に設定
           * text-gray-900: テキストの色を濃いグレーに設定
           */}
          <h1 className='text-3xl font-bold text-gray-900'>
            R-Streamへようこそ
          </h1>
        </div>
      </header>
    </div>
  );
};

export default App;

/* ==========================================
 * Tailwind CSS用語集と補足説明
 * ==========================================
 *
 * 【React/TypeScriptの基本用語】
 *
 * JSX.Element：
 * - Reactコンポーネントが返す要素の型
 * - HTMLに似た構文でUIを記述できる
 * - 例：<div>Hello</div>のような記述が可能
 *
 * React.FC：
 * - Function Componentの略
 * - 関数コンポーネントを定義するための型
 * - 主な特徴：
 *   - propsの型定義が可能
 *   - childrenプロパティが自動的に含まれる
 *   - コンポーネントの戻り値の型がJSX.Elementに制限される
 *
 * 【マージン（margin）とパディング（padding）】
 *
 * マージン（margin）：
 * - 要素の外側の余白
 * - 他の要素との間隔を制御
 * - 例：mx-auto（左右のマージンを自動で中央寄せ）
 *
 * パディング（padding）：
 * - 要素の内側の余白
 * - 要素の内容と境界線の間の間隔
 * - 例：px-4（左右のパディングを16pxに設定）
 *
 * 【画面サイズの基準値】
 *
 * レスポンシブデザインの基準値：
 * - sm: 640px以上（スマートフォン横向き）
 * - md: 768px以上（タブレット）
 * - lg: 1024px以上（小型ノートPC）
 * - xl: 1280px以上（デスクトップ）
 * - 2xl: 1536px以上（大型ディスプレイ）
 *
 * 【よく使うサイズ値】
 *
 * パディングとマージン：
 * - p-1: 4px
 * - p-2: 8px
 * - p-3: 12px
 * - p-4: 16px
 * - p-5: 20px
 * - p-6: 24px
 * - p-8: 32px
 * - p-10: 40px
 * - p-12: 48px
 *
 * フォントサイズ：
 * - text-xs: 12px
 * - text-sm: 14px
 * - text-base: 16px
 * - text-lg: 18px
 * - text-xl: 20px
 * - text-2xl: 24px
 * - text-3xl: 30px
 * - text-4xl: 36px
 *
 * 角丸：
 * - rounded-sm: 2px
 * - rounded: 4px
 * - rounded-md: 6px
 * - rounded-lg: 8px
 * - rounded-xl: 12px
 * - rounded-2xl: 16px
 * - rounded-3xl: 24px
 * ========================================== */
