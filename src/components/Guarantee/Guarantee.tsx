import classNames from 'classnames';

export const Guarantee = () => (
  <div
    className={classNames(
      'flex flex-col gap-7.5 p-5 border border-lightgray rounded-[30px]',
      'max-xl:rounded-[20px] max-xl:p-4 max-xl:gap-2.5',
      'max-sm:p-3'
    )}
  >
    <h2
      className={classNames(
        'max-w-max py-4 px-7.5 border border-success rounded-[68px] text-success font-medium text-[28px] leading-[120%]',
        'max-xl:pt-2.5 max-xl:px-4.5 max-xl:pb-3 max-xl:text-[18px]',
        'max-sm:max-w-max max-sm:text-[16px]'
      )}
    >
      гарантия возврата 30&nbsp;дней
    </h2>
    <p
      className={classNames(
        'text-[24px] text-lightgray2 leading-[130%]',
        'max-xl:text-[14px]',
        'max-sm:text-[13px]'
      )}
    >
      Мы&nbsp;уверены, что наш план сработает для тебя и&nbsp;ты&nbsp;увидишь
      видимые результаты уже через 4&nbsp;недели! Мы&nbsp;даже готовы полностью
      вернуть твои деньги в&nbsp;течение 30&nbsp;дней с&nbsp;момента покупки,
      если ты&nbsp;не&nbsp;получишь видимых результатов.
    </p>
  </div>
);
