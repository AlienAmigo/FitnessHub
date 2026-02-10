'use client';
import React, { useState, useEffect } from 'react';

/* components */
import { TopBanner } from '@components/TopBanner';
import { Guarantee } from '@components/Guarantee';
import { ManPhoto } from '@components/ManPhoto';
import { Loader } from '@components/UI/Loader';
import { TariffSelectForm } from '@components/TariffSelectForm';

/* hooks */
import { useGetTariffs } from '@/hooks/useGetTariffs';

/* types */
import { ITariff } from '@/types';

export default function Home() {
  const [time, setTime] = useState(10);

  const { tariffsData, isLoading, error } = useGetTariffs();

  useEffect(() => {
    const interval = setInterval(() => {
      !isLoading && tariffsData.length && setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, tariffsData]);

  return (
    <>
      <TopBanner time={time} />
      <main className={'flex flex-col h-full w-304 ml-auto mr-auto pb-37.5'}>
        <h1 className={'mt-11.5 mb-27.5 font-bold text-[40px] leading-[110%]'}>
          Выбери подходящий для себя{' '}
          <span className={'text-accent'}>тариф</span>
        </h1>
        <div className={'grid grid-cols-[1fr_748px] mb-16.5'}>
          <ManPhoto className={'mt-13'} />
          {isLoading || !tariffsData.length ? (
            <Loader className={'self-center justify-self-center'} />
          ) : (
            <TariffSelectForm
              isTimeOver={!time}
              tariffsData={tariffsData.map((item: ITariff, index) => ({
                ...item,
                id: item.id + '_' + index,
              }))} // бага, прилетают элементы с одинаковыми id
              className={'animate-fade-in'}
            />
          )}
        </div>
        <Guarantee />
      </main>
    </>
  );
}
