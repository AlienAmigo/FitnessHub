import React from 'react';
import classNames from 'classnames';

import { ITariff } from '@/types';
import { TariffCard } from '@components/TariffCard/TariffCard';

export interface ITariffListProps {
  data: ITariff[];
  onSelect?: React.Dispatch<React.SetStateAction<string | null>>;
  selectedId: string | null;
  className?: string;
}

export const TariffList: React.FC<ITariffListProps> = ({ className, data }) => {
  const listClassNames = classNames('grid grid-cols-3 gap-3.5', className);

  return (
    <ul className={listClassNames}>
      {data.map((item: ITariff) => (
        <li
          key={item.id}
          className={classNames(item.is_best ? 'col-span-full' : '')}
        >
          <TariffCard {...item} />
        </li>
      ))}
    </ul>
  );
};
