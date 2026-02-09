import React from 'react'
import classNames from "classnames";

export interface ITopBannerProps {}

export const TopBanner: React.FC<ITopBannerProps> = () => {
  const timerClassNames = classNames();
  return <div className={'flex flex-col align-center w-full h-max'}>
  <span className={'w-max'}></span>
  </div>;
}
