import { PropsWithChildren } from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Modal.module.scss';
import Button from 'components/common/Buttons/Button';

type PropsType = PropsWithChildren<{
  icon?: JSX.Element | string; // 상단 아이콘
  title?: string;
  desc?: string;
  buttons: {
    label: string; // 버튼 문구
    isSecondary?: boolean; // 메인 버튼일 경우 style 여부
    onClick?: () => void; // 버튼 클릭 시 동작
    rounded?: boolean;
    disabled?: boolean;
  }[];
}>;

const Modal: React.FC<PropsType> = ({
  icon,
  title,
  desc,
  buttons,
}: PropsType) => {
  return (
    <Overlay>
      <div className={styles.modal}>
        {icon && <div>{icon}</div>}
        <div>
          <h1 className={styles.modal__title}>{title}</h1>
          <p className={styles.modal__desc}>{desc}</p>
        </div>
        <div className={styles.modal__buttons}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              onClick={button.onClick}
              isSecondary={button.isSecondary}
              disabled={button.disabled}
              rounded={button.rounded}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
