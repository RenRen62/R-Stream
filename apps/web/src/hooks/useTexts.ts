import { useMemo } from 'react';
import {
  HEADER_TEXTS,
  HOME_TEXTS,
  CREATE_TEXTS,
  JOIN_TEXTS,
  type HeaderTexts,
  type HomeTexts,
  type CreateTexts,
  type JoinTexts
} from '../constants/texts';

// テキスト管理用カスタムHook
export const useTexts = () => {
  // ヘッダーテキスト（メモ化）
  const headerTexts = useMemo<HeaderTexts>(() => HEADER_TEXTS, []);

  // ホーム画面テキスト（メモ化）
  const homeTexts = useMemo<HomeTexts>(() => HOME_TEXTS, []);

  // 作成画面テキスト（メモ化）
  const createTexts = useMemo<CreateTexts>(() => CREATE_TEXTS, []);

  // 参加画面テキスト（メモ化）
  const joinTexts = useMemo<JoinTexts>(() => JOIN_TEXTS, []);

  return {
    headerTexts,
    homeTexts,
    createTexts,
    joinTexts
  };
};

// 特定のテキストセットのみを取得するHook
export const useHeaderTexts = () => {
  return useMemo<HeaderTexts>(() => HEADER_TEXTS, []);
};

export const useHomeTexts = () => {
  return useMemo<HomeTexts>(() => HOME_TEXTS, []);
};

export const useCreateTexts = () => {
  return useMemo<CreateTexts>(() => CREATE_TEXTS, []);
};

export const useJoinTexts = () => {
  return useMemo<JoinTexts>(() => JOIN_TEXTS, []);
};
