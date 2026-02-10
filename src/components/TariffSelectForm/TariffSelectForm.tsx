'use client';
import React, { useState, useMemo, FormHTMLAttributes } from 'react';
import classNames from 'classnames';

import { Button } from '@components/UI/Button';
import { Checkbox } from '@components/UI/Checkbox';

import { Link } from '@components/UI/Link';
import { TariffList } from './components/TariffList';
import { PlanInfo } from './components/PlanInfo';

import { ITariff } from '@/types';

interface ITariffSelectFormProps extends FormHTMLAttributes<HTMLFormElement> {
  isTimeOver?: boolean;
  tariffsData: ITariff[];
  className?: string;
}

export const TariffSelectForm: React.FC<ITariffSelectFormProps> = ({
  tariffsData,
  isTimeOver,
  className,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPrivacyPolicyChecked, setIsPolicyChecked] = useState<boolean>(false);

  const bestId = useMemo(
    () => tariffsData?.find(item => item.is_best)?.id || null,
    [tariffsData]
  );

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(`Выбран тариф`);
  };

  const formClassNames = classNames(
    'flex flex-col flex-1 self-stretch align-stretch',
    className
  );

  return (
    <form method={'POST'} onSubmit={handleOnSubmit} className={formClassNames}>
      <TariffList
        data={[
          ...tariffsData.filter(item => item.is_best),
          ...tariffsData.filter(item => !item.is_best).reverse(),
        ]}
        onSelect={setSelectedId}
        selectedId={selectedId || bestId}
        isTimeOver={isTimeOver}
        className={'mb-5'}
      />
      <PlanInfo className={'mb-7.5'} />
      <Checkbox
        className={'max-w-162.5 mb-4'}
        name={'privacy-policy'}
        checked={isPrivacyPolicyChecked}
        onClick={() => setIsPolicyChecked(prev => !prev)}
        label={
          <span className={'text-[16px] leading-[110%] text-lightgray5'}>
            Я&nbsp;согласен с&nbsp;
            <Link href={'#'}>офертой рекуррентных платежей</Link> и&nbsp;
            <Link href={'#'}>Политикой конфиденциальности</Link>
          </span>
        }
      />
      <Button type={'submit'} className={'min-w-88 mb-3.5 hover:animate-pulse'}>
        Купить
      </Button>
      <small className={'text-[14px] text-lightgray3'}>
        Нажимая кнопку &laquo;Купить&raquo;, Пользователь соглашается
        на&nbsp;разовое списание денежных средств для получения пожизненного
        доступа к&nbsp;приложению. Пользователь соглашается, что данные
        кредитной/дебетовой карты будут сохранены для осуществления покупок
        дополнительных услуг сервиса в&nbsp;случае желания пользователя.
      </small>
    </form>
  );
};
