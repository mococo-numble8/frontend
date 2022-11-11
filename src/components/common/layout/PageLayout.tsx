import classNames from 'classnames/bind';
import React, { PropsWithChildren } from 'react';
import Navigation from '../navigation/Navigation';
import styles from './PageLayout.module.scss';

type PropsType = PropsWithChildren<{
  navigation: boolean;
}>;

const cx = classNames.bind(styles);

const PageLayout: React.FC<PropsType> = ({ navigation, children }) => {
  return (
    <>
      {navigation && <Navigation />}
      {children}
    </>
  );
};

const Fit: React.FC<PropsType> = props => {
  return (
    <div className={cx(styles.layout, styles.fit)}>
      <PageLayout {...props} />
    </div>
  );
};

const Default: React.FC<PropsType> = props => {
  return (
    <div className={cx(styles.layout, styles.default)}>
      <PageLayout {...props} />
    </div>
  );
};

const pageLayoutComponents = {
  Default,
  Fit,
};

export default pageLayoutComponents;
