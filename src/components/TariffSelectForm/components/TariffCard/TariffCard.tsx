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

  const discountValue = Math.floor((1 - price / full_price) * 100);

  const bestCardClasses = classNames(
    'grid col-span-full grid-cols-[1fr_328px] items-center gap-10 min-h-47.5 pt-8.5 pr-20 pb-5 pl-30.5 ',
    'max-xl:min-h-[131px] max-xl:grid-cols-[min(150px)_1fr]',
    'max-md:grid-cols-[minmax(121px,_max-content)_1fr] max-md:gap-12.5',
    'max-sm:min-h-[118px] max-sm:pt-5 max-sm:pr-3 max-sm:pb-5 max-sm:pl-5 max-md:grid-cols-[minmax(107px,_max-content)_1fr] max-sm:gap-7.5'
  );

  const cardClassNames = classNames(
    'flex flex-col justify-between min-h-[335px] pt-17.5 px-4.5 pb-[26px]',
    'max-xl:grid max-xl:min-h-[131px] max-xl:grid-cols-[min(150px)_1fr] max-lg:gap-10 max-xl:items-center max-xl:pt-5 max-xl:pr-5.5 max-xl:pb-5 max-xl:pl-7.5 max-xl:rounded-[20px] max-xl:self-stretch',
    'max-md:grid-cols-[minmax(121px,_max-content)_1fr] max-md:gap-12.5',
    'max-sm:min-h-[118px] max-sm:pt-5 max-sm:pr-3 max-sm:pb-5 max-sm:pl-5 max-md:grid-cols-[minmax(107px,_max-content)_1fr] max-sm:gap-7.5'
  );

  const tariffCardClassNames = classNames(
    'relative rounded-[40px] bg-gray border-lightgray border-2 cursor-pointer',
    'before:block before:content-[""] before:absolute before:w-[calc(100%_+_4px)] before:h-[calc(100%_+_4px)] before:z-4 before:top-[-2px] before:left-[-2px] before:rounded-[40px] before:border-2 before:border-accent before:opacity-0 before:max-xl:rounded-[20px]',
    'max-xl:min-h-43 max-xl:pt-5 max-xl:pr-5.5 max-xl:pb-5 max-xl:pl-7.5 max-xl:rounded-[20px] max-xl:self-stretch',
    is_best ? bestCardClasses : cardClassNames,
    isSelected ? 'before:opacity-100' : 'hover:transform-[scale(1.025)]'
  );

  const discountLabelClassNames = classNames(
    'absolute min-w-17.25 min-h-9.75 top-0 left-12.75 px-2 py-1.25 rounded-b-lg bg-warning text-[22px] leading-[130%] font-medium',
    'max-xl:right-7.5 max-xl:left-[unset] max-xl:min-w-12 max-xl:min-h-7 max-xl:py-0.75 max-xl:px-1.5 max-xl:text-[16px]',
    'max-sm:right-7 max-sm:min-w-10.5 max-sm:min-h-5.5 max-sm:pt-[3px] max-sm:pb-[3px] max-sm:pr-1.5 max-sm:pl-1.5 max-sm:text-[13px]',
    { 'max-xl:right-[62px] max-sm:right-12.5 ': is_best }
  );

  const hitClassNames = classNames(
    'absolute top-2.5 right-5 text-accent text-[22px] leading-[130%]',
    'max-xl:text-[16px] max-xl:top-1.5 max-xl:right-3.5',
    'max-sm:text-[13px]'
  );

  const isBestClassNames = classNames('w-max self-center', {
    'self-start': is_best,
  });

  const titleClassNames = classNames(
    'text-center text-[26px] font-medium leading-[120%]',
    'max-xl:text-[18px] max-xl:text-left max-xl:mb-4',
    'max-sm:text-[18px] max-sm:mb-3',
    is_best ? 'mb-4' : 'mb-7.5'
  );

  const bigPriceClassNames = classNames(
    'text-center font-semibold text-[50px] leading-none',
    'max-xl:text-[34px]',
    'max-sm:text-[30px]',
    { 'text-accent': is_best },
    { 'animate-fade-in-pulse': isTimeOver }
  );

  const realPriceClassName = classNames(
    'text-end line-through text-[24px] text-lightgray4',
    'max-sm:text-[16px]',
    'max-sm:text-[14px]'
  );

  const textClassNames = classNames(
    'min-h-15.5 py-2.5 text-[16px] font-light leading-[130%]',
    'max-xl:min-h-max max-xl:py-0',
    'max-md:text-[14px]'
  );

  return (
    <div className={tariffCardClassNames} onClick={() => onSelect(id)}>
      <span className={discountLabelClassNames}>{`–${discountValue}%`}</span>
      {is_best && <span className={hitClassNames}>хит!</span>}
      <div className={isBestClassNames}>
        <h2 className={titleClassNames}>{period}</h2>
        <p
          className={bigPriceClassNames}
        >{`${formatDigitByClasses(isTimeOver ? full_price : price)} ₽`}</p>
        {!isTimeOver && (
          <p
            className={realPriceClassName}
          >{`${formatDigitByClasses(full_price)} ₽`}</p>
        )}
      </div>
      <span className={textClassNames}>{text}</span>
    </div>
  );
};
