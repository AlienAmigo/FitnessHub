import React from 'react';
import classNames from 'classnames';

import { TariffCard, ITariffCardProps } from '../TariffCard';

import { ITariff } from '@/types';

export interface ITariffListProps extends Pick<
  ITariffCardProps,
  'isSelected' | 'isTimeOver' | 'onSelect'
> {
  data: ITariff[];
  selectedId: string | null;
  className?: string;
}

export const TariffList: React.FC<ITariffListProps> = ({
  isTimeOver,
  onSelect,
  selectedId,
  className,
  data,
}) => {
  const listClassNames = classNames(
    'grid grid-cols-3 gap-3.5 list-none p-0',
    'max-xl:grid-cols-1 max-xl:gap-2',
    'max-sm:gap-1.5',
    className
  );

  return (
    <ul className={listClassNames}>
      {data.map((item: ITariff) => (
        <li
          key={item.id}
          className={classNames('max-xl:col-span-1', {
            'col-span-full max-xl:col-span-1': item.is_best,
          })}
        >
          <TariffCard
            {...item}
            onSelect={onSelect}
            isSelected={selectedId === item.id}
            isTimeOver={isTimeOver}
          />
        </li>
      ))}
    </ul>
  );
};
