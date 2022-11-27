import { testFetch } from 'api/axios/map';
import { useQueryData } from 'hooks/modules/useRequest';
import React from 'react';
import PageLayout from 'components/common/Layout/PageLayout';
import Icon from 'components/common/Icon/Icon';
import { useOverlay } from 'hooks/ui/useOverlay';
import Main from 'components/main/Main';

const HomePage: React.FC = () => {
  const { openOverlay } = useOverlay();
  const { data } = useQueryData(['test'], testFetch);
  console.log(data);

  const navigationOption = {
    title: 'Mococo',
    color: 'primary',
    left: {
      element: <Icon name="menu" alt="menu" />,
      onClick: openOverlay,
    },
  };

  return (
    <PageLayout.Default noPadding navigation navigationOption={navigationOption}>
      <Main />
    </PageLayout.Default>
  );
};

export default HomePage;
