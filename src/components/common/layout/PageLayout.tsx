import classNames from 'classnames/bind';
import React, { PropsWithChildren } from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './PageLayout.module.scss';

type PropsType = PropsWithChildren<{
  navigation?: boolean;
  navigationOption?: UiType.NavigationOptions;
  noPadding?: boolean;
}>;

const cx = classNames.bind(styles);

const PageLayout: React.FC<PropsType> = ({ children, navigation, navigationOption }) => {
  return (
    <>
      {navigation && <Navigation {...navigationOption} />}
      {children}
    </>
  );
};

const Fit: React.FC<PropsType> = props => {
  return (
    <div
      className={cx(styles.layout, styles.fit, {
        [styles['use-navigation']]: props.navigation,
      })}
    >
      <PageLayout {...props} />
    </div>
  );
};

const Default: React.FC<PropsType> = props => {
  return (
    <div
      className={cx(
        styles.layout,
        { [styles.padding]: !props.noPadding },
        {
          [styles['use-navigation']]: props.navigation,
        },
      )}
    >
      <PageLayout {...props} />
    </div>
  );
};

const pageLayoutComponents = {
  Default,
  Fit,
};

export default pageLayoutComponents;
