import React from 'react';
import classNames from 'classnames';

import ManDesktop from './assets/man-desktop.png';
import ManDesktop2x from './assets/man-desktop-2x.png';
import ManTablet from './assets/man-tablet.png';
import ManTablet2x from './assets/man-tablet-2x.png';
import ManMobile from './assets/man-mobile.png';
import ManMobile2x from './assets/man-mobile-2x.png';

interface IManPhotoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const ManPhoto: React.FC<IManPhotoProps> = ({
  className = '',
  ...imgProps
}) => {
  const imgClassNames = classNames('object-contain', className);

  return (
    <picture>
      <source
        media="(max-width: 639px)"
        srcSet={`${ManMobile.src} 1x, ${ManMobile2x.src} 2x`}
        type="image/png"
      />

      <source
        media="(min-width: 640px) and (max-width: 767px)"
        srcSet={`${ManTablet.src} 1x, ${ManTablet2x.src} 2x`}
        type="image/png"
      />

      <source
        media="(min-width: 768px)"
        srcSet={`${ManDesktop.src} 1x, ${ManDesktop2x.src} 2x`}
        type="image/png"
      />

      <img
        {...imgProps}
        src={ManDesktop.src}
        srcSet={`${ManDesktop.src} 1x, ${ManDesktop2x.src} 2x`}
        alt="Атлет. Made by AI"
        className={imgClassNames}
        loading="lazy"
        decoding="async"
        width={381}
        height={767}
      />
    </picture>
  );
};
