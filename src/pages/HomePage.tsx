import { testFetch } from 'api/axios/map';
import { useQueryData } from 'hooks/modules/useRequest';
import React from 'react';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const { data } = useQueryData(['test'], testFetch);
  console.log(data);

  return (
    <>
      <h1>Home</h1>
      <Button>버튼</Button>
    </>
  );
};

export default HomePage;
