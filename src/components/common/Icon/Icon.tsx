import classNames from 'classnames';
import styles from './Icon.module.scss';

interface PropsType {
  name: string; // svg 파일명
  alt: string;
  className?: string; // size
}

const cx = classNames.bind(styles);

const Icon = ({ name, alt, className }: PropsType) => {
  return (
    <img
      alt={alt}
      src={`/vectors/${name}.svg`}
      className={cx({ [styles[`${className}`]]: className })}
    />
  );
};

export default Icon;
