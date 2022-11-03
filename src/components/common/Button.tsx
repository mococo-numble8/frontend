import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type PropsType = PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

const Button: React.FC<PropsType> = props => {
  const { disabled, children, ...rest } = props;

  return (
    <button
      type="button"
      className={cx('common-button', { disabled: disabled })}
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
