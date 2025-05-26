/**
 * 指定された日付が今日の日付かどうかを判定します
 *
 * @example
 * ```typescript
 * const date = new Date();
 * const result = isToday(date); // true
 *
 * const yesterday = new Date();
 * yesterday.setDate(yesterday.getDate() - 1);
 * const result2 = isToday(yesterday); // false
 * ```
 *
 * @param date - 判定する日付
 * @returns 今日の日付の場合はtrue、それ以外はfalse
 * @remarks
 * - 時刻の部分は比較に含まれません
 * - タイムゾーンはシステムのローカルタイムゾーンが使用されます
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};
