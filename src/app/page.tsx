'use client';
import React, { useState, useMemo } from 'react';

/* components */
import { TopBanner } from '@components/TopBanner';
import { Guarantee } from '@components/Guarantee';
import { ManPhoto } from '@components/ManPhoto';
import { Button } from '@components/UI/Button';
import { TariffList } from '@components/TariffList';

/* hooks */
import { useGetTariffs } from '@/hooks/useGetTariffs';

/* types */
import { ITariff } from '@/types';

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { tariffsData, isLoading, error } = useGetTariffs();

  const bestId = useMemo(
    () => tariffsData?.find(item => item.is_best)?.id || null,
    [tariffsData]
  );

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert(`Выбран тариф`);
  };

  return (
    <>
      <TopBanner />
      <main className={'flex flex-col h-full w-304 ml-auto mr-auto'}>
        <h1 className={'mt-12.5 mb-27.5 font-bold text-[40px]'}>
          Выбери подходящий для себя{' '}
          <span className={'text-accent'}>тариф</span>
        </h1>
        <div className={'grid grid-cols-[1fr_748px] mb-16.5'}>
          <ManPhoto className={'mt-13'} />
          <form method={'POST'} onSubmit={handleOnSubmit}>
            <TariffList
              data={[
                ...tariffsData.filter(item => item.is_best),
                ...tariffsData.filter(item => !item.is_best),
              ]}
              onSelect={setSelectedId}
              selectedId={selectedId || bestId}
              className={'mb-5'}
            />
            <div className={'relative '}>
              <span></span>
              Следуя плану на&nbsp;3&nbsp;месяца и&nbsp;более, люди получают
              в&nbsp;2&nbsp;раза лучший результат, чем за&nbsp;1&nbsp;месяц
            </div>

            <Button type={'submit'} className={'min-w-88'}>
              Купить
            </Button>
            <small className={'mt-3.5 text-[14px] text-lightgray3'}>
              Нажимая кнопку &laquo;Купить&raquo;, Пользователь соглашается
              на&nbsp;разовое списание денежных средств для получения
              пожизненного доступа к&nbsp;приложению. Пользователь соглашается,
              что данные кредитной/дебетовой карты будут сохранены для
              осуществления покупок дополнительных услуг сервиса в&nbsp;случае
              желания пользователя.
            </small>
          </form>
        </div>

        <Guarantee />
      </main>
    </>
  );
}
