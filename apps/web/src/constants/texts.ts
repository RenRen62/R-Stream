// グローバルテキスト管理
// R-Stream プロジェクト全体で使用するテキストを一元管理

// 共通ヘッダーテキスト
export const HEADER_TEXTS = {
  APP_TITLE: 'R-Stream',
  MENU_BUTTON_TITLE: 'メニューを開く',
  BACK_BUTTON_TITLE: 'トップページに戻る'
} as const;

// ホーム画面テキスト
export const HOME_TEXTS = {
  WELCOME_TITLE: 'R-Streamへようこそ！',
  WELCOME_DESCRIPTION:
    'セッションを開始するか、既存のセッションに参加してください。',
  CREATE_BUTTON_TEXT: 'R-Streamを新規作成する',
  JOIN_BUTTON_TEXT: '既存のR-Streamに参加する'
} as const;

// 作成画面テキスト
export const CREATE_TEXTS = {
  PAGE_TITLE: 'R-Streamを新規作成する',
  HEADING: 'R-Streamを新規作成する',
  DESCRIPTION: 'この画面は開発中です'
} as const;

// 参加画面テキスト
export const JOIN_TEXTS = {
  PAGE_TITLE: 'R-Streamに参加する',
  HEADING: '既存のR-Streamに参加する',
  DESCRIPTION: 'この画面は開発中です'
} as const;

// 型定義
export type HeaderTexts = typeof HEADER_TEXTS;
export type HomeTexts = typeof HOME_TEXTS;
export type CreateTexts = typeof CREATE_TEXTS;
export type JoinTexts = typeof JOIN_TEXTS;
