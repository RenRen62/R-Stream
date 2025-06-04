/**
 * R-Streamアプリケーションのエントリーポイント
 *
 * このファイルは以下の役割を担います：
 * - Reactアプリケーションの初期化
 * - DOM（Document Object Model）へのレンダリング
 * -- DOM:HTMLドキュメントをツリー構造で表現したもの
 * - エラーハンドリング
 */

// まずは必要なモジュールのインポート
import React from 'react'; // Reactの基本機能を提供
import { createRoot } from 'react-dom/client'; // React 18の新しいレンダリングAPI
import './index.css'; // グローバルスタイルシート
import App from './App'; // アプリケーションのメインコンポーネント

// ルート要素の取得と存在確認
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('このページは存在しませんよ');

// Reactアプリケーションの初期化（React 18の新しいルートAPIを使用）
const root = createRoot(rootElement);

// アプリケーションのレンダリング
// StrictModeは開発時の潜在的な問題検出を助ける役割
// AppコンポーネントをStrictModeでラップしてレンダリング
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* ==========================================
 * 用語集と補足説明
 * ==========================================
 *
 * 【DOM (Document Object Model)】
 * - HTMLドキュメントをツリー構造で表現したもの
 * - 各要素（タグ）がノードとして表現される
 *
 * 例：index.htmlの構造
 * <!DOCTYPE html>
 * <html>
 *   <head>
 *     <title>R-Stream</title>
 *   </head>
 *   <body>
 *     <div id="root">  <!-- ここにReactアプリがマウントされる -->
 *       <!-- Reactがここにコンテンツを挿入 -->
 *     </div>
 *   </body>
 * </html>
 *
 * 【コンポーネント】
 * - UIの部品を再利用可能な形で定義したもの
 * - 種類：
 *   1. 関数コンポーネント（現在の主流）
 *   2. クラスコンポーネント（古い方式）
 *
 * 【グローバルスタイル】
 * - アプリケーション全体に適用されるスタイル定義
 *
 * 【レンダリングAPIとルートAPIの違い】
 *
 * 1. レンダリングAPI（古い方式：React 17以前）
 *    import ReactDOM from 'react-dom';
 *    ReactDOM.render(<App />, document.getElementById('root'));
 *
 * 2. ルートAPI（新しい方式：React 18以降）
 *    import { createRoot } from 'react-dom/client';
 *    const root = createRoot(document.getElementById('root'));
 *    root.render(<App />);
 *
 * 主な違い：
 * - 並行レンダリングのサポート
 * - 自動バッチ処理の改善
 * - より効率的な更新処理
 * - より良いエラーハンドリング
 *
 * 【StrictModeでコンポーネントをラップする意味】
 *
 * StrictModeの役割：
 * - 非推奨のライフサイクルメソッドの検出
 * - 予期しない副作用の検出
 * - 古いコンテキストAPIの使用の検出
 * - 予期しない副作用の二重呼び出し
 *
 * ラップの効果：
 * - 開発時の問題を早期発見
 * - コードの品質向上
 * - 将来の互換性の確保
 * - パフォーマンスの最適化
 * ========================================== */
