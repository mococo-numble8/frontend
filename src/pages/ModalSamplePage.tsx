import Icon from 'components/common/Icon/Icon';
import Modal from 'components/common/Modal/Modal';
import { useModal } from 'hooks/ui/useModal';
import Avatar from 'components/common/avatar/avatar';

const ModalSamplePage: React.FC = () => {
  const { openModal, closeModal } = useModal();

  return (
    <>
      <h1>ModalSamplePage</h1>
      <button onClick={openModal}>open modal</button>
      <Avatar />
      <div>
        <Modal
          icon={<Icon name="warning" alt="warning" className="large" />}
          title="Title"
          desc="description"
          buttons={[
            { label: 'action', isSecondary: true, rounded: true },
            { label: 'close', onClick: closeModal, rounded: true },
          ]}
        />
      </div>
    </>
  );
};

export default ModalSamplePage;
