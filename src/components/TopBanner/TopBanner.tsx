'use client';
import React from 'react';
import classNames from 'classnames';

import { StarIcon } from './components/StarIcon';

export interface ITopBannerProps {
  time: number;
}

export const TopBanner: React.FC<ITopBannerProps> = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  const wrapperClassNames = classNames(
    'flex flex-col items-center justify-center gap-1 w-full h-max py-2 bg-darkgreen',
    'max-md:px-4.5'
  );

  const titleClassName = classNames(
    'w-max font-semibold text-[24px] leading-[130%] text-center',
    'max-md:text-[18px]',
    'max-sm:text-[14px]'
  );

  const timerWrapperClassNames = classNames(
    'flex w-max justify-center items-center gap-2 py-1 font-bold text-[40px] leading-[110%] font-raleway',
    'max-md:text-[32px]',
    'max-sm:text-[28px]',
    time <= 30
      ? time === 0
        ? 'text-white'
        : 'animate-ping-alt text-error'
      : 'text-accent'
  );

  return (
    <div className={wrapperClassNames}>
      <span className={titleClassName}>Успейте открыть пробную неделю</span>
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
