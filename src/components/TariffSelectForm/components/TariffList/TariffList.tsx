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
    className
  );

  return (
    <ul className={listClassNames}>
      {data.map((item: ITariff) => (
        <li
          key={item.id}
          className={classNames({ 'col-span-full': item.is_best })}
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
