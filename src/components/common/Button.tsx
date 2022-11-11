import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type PropsType = PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  rounded?: boolean;
}>;

const Button: React.FC<PropsType> = props => {
  const { disabled, children, rounded, ...rest } = props;

  return (
    <button
      type="button"
      className={cx(
        'common-button',
        { disabled: disabled },
        { rounded: rounded },
      )}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
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
