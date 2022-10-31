import Modal from 'components/common/Modal/Modal';

const TestPage: React.FC = () => {
  return (
    <>
      <h1>TestPage</h1>
      <button>open modal</button>
      <div>
        <Modal
          title="Title"
          desc="description"
          buttons={[{ label: 'button1' }, { label: 'button2' }]}
        />
      </div>
    </>
  );
};

export default TestPage;
