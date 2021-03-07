import * as React from 'react';
import { AppealTarget } from './AppealTarget';
import { AuditionWeek } from './AuditionWeek';
import { BuffValue } from './BuffValue';
import { MemorialOption } from './MemorialOption';

export const OtherOptionForm: React.FC = () => (
  <details className='border p-1'>
    <summary>기타 옵션</summary>
    <MemorialOption/>
    <AuditionWeek/>
    <BuffValue/>
    <AppealTarget/>
  </details>
);
