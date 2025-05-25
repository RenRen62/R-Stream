/**
 * dateCheckerモジュールのテストファイル
 *
 * @group Unit Tests
 * @group Date Functions
 */

import { isToday } from './dateChecker';

/**
 * isToday関数のテストスイート
 *
 * テストケース:
 * 1. 今日の日付を渡した場合
 * 2. 昨日の日付を渡した場合
 * 3. 明日の日付を渡した場合
 * 4. 今日の日付で時刻が異なる場合
 */
describe('isToday', () => {
  /**
   * 基本的な正常系テスト
   * 今日の日付を渡した場合、trueが返されることを確認
   */
  it('今日の日付の場合はtrueを返す', () => {
    const today = new Date();
    expect(isToday(today)).toBe(true);
  });

  /**
   * 境界値テスト（過去）
   * 昨日の日付を渡した場合、falseが返されることを確認
   */
  it('昨日の日付の場合はfalseを返す', () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    expect(isToday(yesterday)).toBe(false);
  });

  /**
   * 境界値テスト（未来）
   * 明日の日付を渡した場合、falseが返されることを確認
   */
  it('明日の日付の場合はfalseを返す', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    expect(isToday(tomorrow)).toBe(false);
  });

  /**
   * エッジケーステスト
   * 同じ日付で時刻が異なる場合、trueが返されることを確認
   */
  it('同じ日付で時間が異なる場合はtrueを返す', () => {
    const todayDifferentTime = new Date();
    todayDifferentTime.setHours(23, 59, 59);
    expect(isToday(todayDifferentTime)).toBe(true);
  });
});
