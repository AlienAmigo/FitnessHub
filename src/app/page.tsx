'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

/* components */
import { TopBanner } from '@components/TopBanner';
import { Guarantee } from '@components/Guarantee';
import { ManPhoto } from '@components/ManPhoto';
import { Loader } from '@components/UI/Loader';
import { TariffSelectForm } from '@components/TariffSelectForm';

/* hooks */
import { useGetTariffs } from '@/hooks/useGetTariffs';

/* config */
import { TOP_BANNER_TIME } from '@/config';

/* types */
import { ITariff } from '@/types';

export default function Home() {
  const [time, setTime] = useState(TOP_BANNER_TIME);

  const { tariffsData, isLoading, error } = useGetTariffs();

  useEffect(() => {
    const interval = setInterval(() => {
      !isLoading &&
        tariffsData.length &&
        setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isLoading, tariffsData]);

  return (
    <>
      <TopBanner time={time} />
      <main
        className={classNames(
          'flex flex-col h-full w-304 ml-auto mr-auto pb-37.5',
          'max-xl:w-auto max-xl:pl-8 max-xl:pr-8 max-xl:pb-20',
          'max-md:pl-4 max-md:pr-4 max-md:pb-7.5',
          'max-sm:pb-5'
        )}
      >
        <h1
          className={classNames(
            'mt-11.5 mb-27.5 font-bold text-[40px] leading-[110%]',
            'max-xl:text-[36px] max-xl:mt-10 max-xl:mb-25',
            'max-md:text-[24px] max-md:mt-5 max-md:mb-5',
            'max-sm:text-[22px] max-sm:mb-6'
          )}
        >
          Выбери подходящий для&nbsp;себя{' '}
          <span className={'text-accent'}>тариф</span>
        </h1>
        <div
          className={classNames(
            'grid grid-cols-[1fr_748px] mb-16.5',
            'max-xl:grid-cols-[1fr_2fr] max-xl:mb-12',
            'max-md:grid-cols-1',
            'max-md:mb-6',
            'max-sm:mb-5.5'
          )}
        >
          <ManPhoto
            className={classNames(
              'mt-13',
              'max-md:justify-self-center max-md:mt-0 max-md:max-w-[35%] max-md:min-w-31',
              'max-sm:min-w-25'
            )}
          />
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
