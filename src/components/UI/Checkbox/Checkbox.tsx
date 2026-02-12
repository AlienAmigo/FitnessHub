import React from 'react';
import classNames from 'classnames';

interface ICheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: React.ReactNode | string;
  className?: string;
  onClick: () => void;
  isInvalid?: boolean;
}

export const Checkbox: React.FC<ICheckboxProps> = props => {
  const {
    className,
    label = <></>,
    checked,
    onClick,
    isInvalid,
    ...checkboxProps
  } = props;

  const labelClassNames = classNames(
    'grid grid-cols-[max-content_1fr] gap-3',
    className
  );

  return (
    <label className={labelClassNames}>
      <input
        {...checkboxProps}
        defaultChecked={checked}
        type="сheckbox"
        className={'hidden'}
        onClick={onClick}
      />
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={'mt-px cursor-pointer max-md:mt-0'}
      >
        <path
          d="M29.0909 0H2.90911C1.30541 0 0 1.30466 0 2.90911V29.0909C0 30.6953 1.30541 32.0001 2.90911 32.0001H29.0909C30.6946 32.0001 32.0001 30.6954 32.0001 29.0909V2.90911C32 1.30466 30.6946 0 29.0909 0ZM30.5455 29.0909C30.5455 29.8928 29.8934 30.5455 29.0909 30.5455H2.90911C2.10655 30.5455 1.45459 29.8928 1.45459 29.0909V2.90911C1.45459 2.1073 2.10661 1.45459 2.90911 1.45459H29.0909C29.8935 1.45459 30.5455 2.1073 30.5455 2.90911V29.0909Z"
          fill={isInvalid ? 'var(--color-error)' : '#606566'}
        />
        <path
          d="M25.2852 9.29688C25.3589 9.21835 25.4799 9.20441 25.5693 9.25977L25.6055 9.28809C25.6959 9.37367 25.7004 9.51782 25.6143 9.60938L13.251 22.7002C13.2071 22.7466 13.148 22.7724 13.0859 22.7725H13.084C13.0351 22.7718 12.9891 22.7552 12.9512 22.7275L12.916 22.6963L6.37109 15.4238C6.2873 15.3307 6.29484 15.1871 6.3877 15.1035C6.4802 15.0203 6.62371 15.0253 6.71094 15.1211L12.7266 21.8057L13.0898 22.209L13.4619 21.8145L25.2842 9.29785L25.2852 9.29688Z"
          fill="var(--color-accent)"
          stroke="#FDB056"
          className={classNames(checked ? 'opacity-100' : 'opacity-0')}
        />
      </svg>
      {label}
    </label>
  );
};
