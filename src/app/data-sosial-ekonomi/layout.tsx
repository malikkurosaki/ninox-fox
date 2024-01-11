import { ViewLayoutTmp } from '@/modules/temporary';
import React from 'react';

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <ViewLayoutTmp>
      {children}
    </ViewLayoutTmp>
  );
}

