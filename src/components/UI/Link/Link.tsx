import React from 'react';
import classNames from 'classnames';

interface ILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const Link: React.FC<ILinkProps> = props => {
  const { className, children, ...linkProps } = props;

  const linkClassNames = classNames(
    'underline hover:text-accent hover:no-underline',
    className
  );

  return (
    <a {...linkProps} className={linkClassNames}>
      {children}
    </a>
  );
};
