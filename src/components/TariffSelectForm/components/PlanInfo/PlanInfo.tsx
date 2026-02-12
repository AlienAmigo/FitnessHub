import React from 'react';
import classNames from 'classnames';

interface IPlanInfoProps {
  className?: string;
}

export const PlanInfo: React.FC<IPlanInfoProps> = ({ className }) => (
  <div
    className={classNames(
      'relative max-w-125 py-4.5 pr-5 pl-13 rounded-[20px] bg-gray2 border border-lightgray text-[16px] leading-[130%]',
      'max-md:pl-10 max-md:text-[12px]',
      className
    )}
  >
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'absolute top-4.5 left-5 max-md:left-3'}
    >
      <path
        d="M10.8775 16.6437C10.8869 17.2578 11.3885 17.75 12.0025 17.75C12.6166 17.75 13.1181 17.2531 13.1275 16.6437L13.5025 6.5375C13.526 6.15313 13.3853 5.77813 13.1135 5.4875C12.8228 5.17813 12.4197 5 12.0025 5C11.5853 5 11.1822 5.17813 10.8916 5.4875C10.6197 5.77813 10.4791 6.15313 10.5025 6.5375L10.8775 16.6437Z"
        fill="var(--color-accent)"
      />
      <path
        d="M12 23C12.8284 23 13.5 22.3284 13.5 21.5C13.5 20.6716 12.8284 20 12 20C11.1716 20 10.5 20.6716 10.5 21.5C10.5 22.3284 11.1716 23 12 23Z"
        fill="var(--color-accent)"
      />
    </svg>
    Следуя плану на&nbsp;3&nbsp;месяца и&nbsp;более, люди получают
    в&nbsp;2&nbsp;раза лучший результат, чем за&nbsp;1&nbsp;месяц
  </div>
);
