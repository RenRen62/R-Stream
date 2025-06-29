import React from 'react';

type MainContentProps = {
  children: React.ReactNode;
};

export const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <main className='mx-auto w-full max-w-3xl p-4'>{children}</main>
);
