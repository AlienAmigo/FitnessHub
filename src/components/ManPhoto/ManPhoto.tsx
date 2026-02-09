import React from 'react';
import classNames from 'classnames';

import Image from 'next/image';
import ManImg from './assets/man-desktop.png';
import Man2xImg from './assets/man-desktop-2x.png';
import ManTabletImg from './assets/man-desktop.png';
import ManTablet2xImg from './assets/man-desktop-2x.png';
import ManMobileImg from './assets/man-desktop.png';
import ManMobile2xImg from './assets/man-desktop-2x.png';

interface IManPhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const ManPhoto: React.FC<IManPhotoProps> = props => {
  const { className, ...imgProps } = props;

  return (
    <Image
      {...imgProps}
      className={className}
      src={ManImg}
      width={381}
      height={767}
    />
  );
};
