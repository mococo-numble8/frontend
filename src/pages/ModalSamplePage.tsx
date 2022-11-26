import Icon from 'components/common/Icon/Icon';
import Modal from 'components/common/Modal/Modal';
import { useOverlay } from 'hooks/ui/useOverlay';
import Avatar from 'components/common/avatar/avatar';
import ListItem from '../components/combine/listItem/ListItem';
import FloatingButton from '../components/common/Buttons/FloatingButton';

const ModalSamplePage: React.FC = () => {
  const { openOverlay, closeOverlay } = useOverlay();

  return (
    <>
      <h1>ModalSamplePage</h1>
      <button onClick={openOverlay}>open modal</button>
      <Avatar name="sungho2.jpg" />
      <ListItem title="합정역 코딩 같이 하실분 계신가요?" />
      <FloatingButton icon={<Icon name="cross" alt="floating-button" />} onClick={() => console.log('dd')} />
      <div>
        <Modal
          icon={<Icon name="warning" alt="warning" className="large" />}
          title="Title"
          desc="description"
          buttons={[
            { label: 'action', isSecondary: true, rounded: true },
            { label: 'close', onClick: closeOverlay, rounded: true },
          ]}
        />
      </div>
    </>
  );
};

export default ModalSamplePage;
