import React from 'react';
import { TextDisplay } from './TextDisplay';

export const Header: React.FC = () => (
  <header className='flex items-center justify-between bg-blue-600 p-4 text-white'>
    <TextDisplay textKey='welcome' className='text-lg font-bold' />
    {/* 必要に応じて他の要素を追加 */}
  </header>
);
