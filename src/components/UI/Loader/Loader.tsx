import React from 'react';
import classNames from 'classnames';

interface ILoaderProps {
  className?: string;
}

export const Loader: React.FC<ILoaderProps> = ({ className }) => {
  const loaderClassNames = classNames('animate-spin', className);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="50"
      height="50"
      className={loaderClassNames}
    >
      <g>
        <circle
          strokeDasharray="188.49555921538757 64.83185307179586"
          r="40"
          strokeWidth="12"
          stroke="#fdb056"
          fill="none"
          cy="50"
          cx="50"
          transform="matrix(0.12533318072107866,0.9921147079901282,-0.9921147079901282,0.12533318072107866,93.33907636345248,-5.872394435560345)"
        ></circle>
        <g></g>
      </g>
    </svg>
  );
};
