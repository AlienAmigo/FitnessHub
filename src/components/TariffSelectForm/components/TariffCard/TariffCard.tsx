import React from 'react';
import classNames from 'classnames';

import { formatDigitByClasses } from '@/helpers/formatDigitByClasses';

import { ITariff } from '@/types';

export interface ITariffCardProps extends ITariff {
  isSelected?: boolean;
  isTimeOver?: boolean;
  onSelect: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TariffCard: React.FC<ITariffCardProps> = props => {
  const {
    isSelected,
    isTimeOver,
    onSelect,
    id,
    period,
    price,
    full_price,
    text,
    is_best,
  } = props;

  const discountValue = 10;

  const bestCardClasses =
    'grid col-span-full grid-cols-[1fr_328px] items-center gap-10 min-h-47.5 pt-8.5 pr-20 pb-5 pl-30.5';

  const cardClassNames =
    'flex flex-col justify-between min-h-[335px] pt-17.5 px-4.5 pb-[26px]';

  const tariffCardClassNames = classNames(
    'relative rounded-[40px] bg-gray border-lightgray border-2 cursor-pointer before:block before:content-[""] before:absolute before:w-[calc(100%_+_4px)] before:h-[calc(100%_+_4px)] before:z-4 before:top-[-2px] before:left-[-2px] before:rounded-[40px] before:border-2 before:border-accent before:opacity-0',
    is_best ? bestCardClasses : cardClassNames,
    isSelected ? 'before:opacity-100' : 'hover:transform-[scale(1.025)]'
  );

  return (
    <div className={tariffCardClassNames} onClick={() => onSelect(id)}>
      <span
        className={
          'absolute min-w-17.25 min-h-9.75 top-0 left-12.75 px-2 py-1.25 rounded-b-lg bg-warning text-[22px] leading-[130%] font-medium'
        }
      >{`–${discountValue}%`}</span>
      {is_best && (
        <span
          className={
            'absolute top-2.5 right-5 text-accent text-[22px] leading-[130%]'
          }
        >
          хит!
        </span>
      )}
      <div
        className={classNames('w-max self-center', { 'self-start': is_best })}
      >
        <h2
          className={classNames(
            'text-center text-[26px] font-medium leading-[120%]',
            is_best ? 'mb-4' : 'mb-7.5'
          )}
        >
          {period}
        </h2>
        <p
          className={classNames(
            'text-center font-semibold text-[50px] leading-none',
            { 'text-accent': is_best },
            { 'animate-fade-in-pulse': isTimeOver }
          )}
        >{`${formatDigitByClasses(isTimeOver ? full_price : price)} ₽`}</p>
        {!isTimeOver && (
          <p
            className={'text-end line-through text-[24px] text-lightgray4'}
          >{`${formatDigitByClasses(full_price)} ₽`}</p>
        )}
      </div>
      <span
        className={'min-h-15.5 py-2.5 text-[16px] font-light leading-[130%]'}
      >
        {text}
      </span>
    </div>
  );
};
