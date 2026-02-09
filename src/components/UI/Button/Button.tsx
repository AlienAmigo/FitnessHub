import React from 'react';

import classNames from 'classnames';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<IButtonProps> = props => {
  const { children, className, ...buttonProps } = props;

  const buttonClassNames = classNames(
    'flex items-center justify-center bg-accent w-max p-5 font-bold text-[20px] text-darker rounded-xl cursor-pointer',
    className
  );

  return (
    <button {...buttonProps} className={buttonClassNames}>
      {children}
    </button>
  );
};
