import { PropsWithChildren } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Modal.module.scss';

type PropsType = PropsWithChildren<{
  icon?: JSX.Element | string; // 상단 아이콘
  title?: string;
  desc?: string;
  buttons: {
    label: string; // 버튼 문구
    isPrimary?: boolean; // 메인 버튼일 경우 style 여부
    onClick?: () => void; // 버튼 클릭 시 동작
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
            <button key={index} onClick={button.onClick}>
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
