import { PropsWithChildren } from 'react';

type PropsType = PropsWithChildren<{
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}>;

const Button: React.FC<PropsType> = (props) => {
  const { disabled, children, ...rest } = props;
 
  return (
    <button
      type="button"
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