import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type PropsType = PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  rounded?: boolean;
  isSignup?: boolean;
}>;

const Button: React.FC<PropsType> = props => {
  const { disabled, children, rounded, isSignup, ...rest } = props;

  return (
    <button
      type="button"
      className={cx(
        'common-button',
        { disabled: disabled },
        { rounded: rounded },
        { 'signup-type': isSignup },
      )}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
