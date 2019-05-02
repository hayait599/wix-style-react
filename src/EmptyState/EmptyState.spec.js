import React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import EmptyState from './EmptyState';
import emptyStateDriverFactory from './EmptyState.driver';

describe('EmptyState', () => {
  const createDriver = createDriverFactory(emptyStateDriverFactory);

  const defaultProps = {
    title: 'My awesome title',
    subtitle: 'My awesome subtitle',
  };

  it('should have a title and a subtitle', () => {
    const driver = createDriver(<EmptyState {...defaultProps} />);

    expect(driver.getTitleText()).toEqual('My awesome title');
    expect(driver.getSubtitleText()).toEqual('My awesome subtitle');
  });

  it('should have an image', () => {
    const driver = createDriver(
      <EmptyState {...defaultProps} image="http://wix.com/some-image.png" />,
    );

    expect(driver.getImageUrl()).toEqual('http://wix.com/some-image.png');
  });

  it('should have a theme', () => {
    const driver = createDriver(
      <EmptyState {...defaultProps} theme="page-no-border" />,
    );

    expect(driver.hasTheme('page-no-border')).toBe(true);
  });

  it('should support image passed as a node', () => {
    const driver = createDriver(
      <EmptyState {...defaultProps} image={<span>I am the image node</span>} />,
    );

    expect(driver.imageNodeExists()).toEqual(true);
  });

  it("should render it's children", () => {
    const driver = createDriver(
      <EmptyState {...defaultProps}>
        <button>I am a button!</button>
      </EmptyState>,
    );

    expect(driver.childrenContentExists()).toEqual(true);
  });
});
