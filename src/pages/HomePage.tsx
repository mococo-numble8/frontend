import { testFetch } from 'api/axios/map';
import { useQueryData } from 'hooks/modules/useRequest';
import React from 'react';
import PageLayout from 'components/common/Layout/PageLayout';
import Icon from 'components/common/Icon/Icon';

const HomePage: React.FC = () => {
  const { data } = useQueryData(['test'], testFetch);
  console.log(data);

  const navigationOption = {
    title: 'Mococo',
    color: 'primary',
    left: {
      element: <Icon name="menu" alt="menu" />,
      onClick: () => alert('clicked!'),
    },
  };

  return (
    <PageLayout.Default navigation navigationOption={navigationOption}>
      <div>Main</div>
    </PageLayout.Default>
  );
};

export default HomePage;
