import React from 'react';

import classNames from 'classnames';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<IButtonProps> = props => {
  const { children, className, ...buttonProps } = props;

  const buttonClassNames = classNames('flex align-center justify-center', className);

  return (
    <button {...buttonProps} className={buttonClassNames}>
      {children}
    </button>
  );
};
