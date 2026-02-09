'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { StarIcon } from './components/StarIcon';

export interface ITopBannerProps {
  duration?: number;
}

export const TopBanner: React.FC<ITopBannerProps> = ({ duration = 3 * 60 }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  const timerWrapperClassNames = classNames(
    'flex w-max justify-center items-center gap-2 py-1 font-bold text-[40px]'
  );

  return (
    <div
      className={
        'flex flex-col items-center justify-center gap-1 w-full h-max py-2 bg-darkgreen'
      }
    >
      <span className={'w-max font-semibold text-[24px] text-center'}>
        Успейте открыть пробную неделю
      </span>
      <div className={timerWrapperClassNames}>
        <StarIcon />
        <span className={'flex items-center justify-center gap-[6px]'}>
          <span>{formattedMinutes}</span>
          <span>:</span>
          <span>{formattedSeconds}</span>
        </span>
        <StarIcon />
      </div>
    </div>
  );
};
