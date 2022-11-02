import Modal from 'components/common/Modal/Modal';
import { useModal } from 'hooks/ui/useModal';

const ModalSamplePage: React.FC = () => {
  const { openModal, closeModal } = useModal();

  return (
    <>
      <h1>ModalSamplePage</h1>
      <button onClick={openModal}>open modal</button>
      <div>
        <Modal
          title="Title"
          desc="description"
          buttons={[
            { label: 'action' },
            { label: 'close', onClick: closeModal },
          ]}
        />
      </div>
    </>
  );
};

export default ModalSamplePage;