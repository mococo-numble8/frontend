import classNames from 'classnames/bind';
import React, { PropsWithChildren } from 'react';
import Navigation from '../navigation/Navigation';
import styles from './PageLayout.module.scss';

type PropsType = PropsWithChildren<{
  navigation: boolean;
  onboarding?: boolean;
  title?: string;
}>;

const cx = classNames.bind(styles);

const PageLayout: React.FC<PropsType> = ({
  navigation,
  children,
  onboarding = false,
  title = '',
}) => {
  return (
    <>
      {navigation && <Navigation title={title} onboarding={onboarding} />}
      {children}
    </>
  );
};

const Fit: React.FC<PropsType> = props => {
  return (
    <div
      className={cx(styles.layout, styles.fit, {
        'use-navigation': props.navigation,
        onboarding: props.onboarding,
      })}
    >
      <PageLayout {...props} />
    </div>
  );
};

const Default: React.FC<PropsType> = props => {
  return (
    <div
      className={cx(styles.layout, styles.default, {
        'use-navigation': props.navigation,
        onboarding: props.onboarding,
      })}
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
