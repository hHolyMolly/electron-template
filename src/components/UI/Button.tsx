import React from 'react';
import classNames from 'classnames';

import { type TypeStatus } from '@interfaces/status.types';

import { LoadingIcon } from '@components/icons';

type Props<T = React.ReactNode> = {
  children: T;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  status?: TypeStatus;
  ariaLabel?: string;

  before?: T;
  after?: T;
};

const Button: React.FC<Props> = ({ children, className, style, onClick, type = 'button', status = 'loaded', ariaLabel, before, after }) => {
  return (
    <button
      className={classNames(
        'gap-x-[6px] inline-flex justify-center items-center overflow-hidden rounded-[8px] bg-blue-500 text-center font-semibold text-white',

        className,

        // loading
        status === 'loading' && 'pointer-events-none opacity-50',

        // error
        'disabled:pointer-events-none disabled:opacity-50'
      )}
      style={style}
      onClick={() => onClick?.()}
      type={type}
      disabled={status === 'error'}
      aria-label={ariaLabel}
    >
      {before && <span>{before}</span>}

      {status !== 'loading' ? children : <LoadingIcon />}

      {after && <span>{after}</span>}
    </button>
  );
};

export default React.memo(Button);
