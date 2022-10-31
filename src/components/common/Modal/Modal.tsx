import { PropsWithChildren } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Modal.module.scss';

type PropsType = PropsWithChildren<{
  icon?: JSX.Element | string;
  title?: string;
  desc?: string;
  buttons: {
    label: string;
    isPrimary?: boolean;
  }[];
}>;

const Modal: React.FC<PropsType> = props => {
  return (
    <Overlay>
      <div className={styles.modal}>
        {props.icon}
        <div>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
        <div className={styles.modal__buttons}>
          {props.buttons.map((button, index) => (
            <button key={index}>{button.label}</button>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
