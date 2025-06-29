import { useMemo } from 'react';
import { texts } from '../constants/texts';

export const useTexts = () => {
  return useMemo(() => texts, []);
};
