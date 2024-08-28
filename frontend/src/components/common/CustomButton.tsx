/**
 * CustomButton component represents a button with customizable text, styles, and loading state.
 * @module CustomButton
 */

import { CircularProgress } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  btnText: string;
  btnStyles?: string;
  btnLoading?: boolean;
  btnDisabled?: boolean;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  btnOnClick?: any;
  btnType?: 'submit' | 'button';
  isDelete?: boolean;
}

const CustomButton = ({
  btnStyles,
  btnText,
  btnLoading,
  btnDisabled,
  btnOnClick,
  btnType,
  isDelete,
}: CustomButtonProps) => {
  return (
    <button
      className={`${btnStyles} ${isDelete ? 'delete-btn' : 'primary-btn'}`}
      disabled={btnDisabled}
      type={btnType || 'button'}
      onClick={btnOnClick}
    >
      {btnLoading ? (
        <div className="flex justify-center items-center gap-2">
          <CircularProgress size={12} sx={{ color: 'white' }} />
          <span className="italic">
            Pending<span className="dots-flashing"></span>{' '}
          </span>
        </div>
      ) : (
        btnText
      )}
    </button>
  );
};

export default CustomButton;
