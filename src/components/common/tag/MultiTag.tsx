import classNames from 'classnames';
import styles from './MultiTag.module.scss';

type PropsType = TagType.Tag & {
  name: string;
  checked: boolean;
  onClick: (value: string) => void;
};

const cx = classNames.bind(styles);

const MultiTag = ({ name, id, tag, checked, onClick }: PropsType) => {
  return (
    <div className={cx(styles['multi-tag'], { [styles.checked]: checked })}>
      <input id={String(id)} type="checkbox" name={name} checked={checked} onChange={e => onClick(e.target.id)} />
      <label htmlFor={String(id)} className="regular-15">
        {tag}
      </label>
    </div>
  );
};

export default MultiTag;
