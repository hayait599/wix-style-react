import * as React from 'react';
import { createDriverFactory } from 'wix-ui-test-utils/driver-factory';
import linearProgressBarDriverFactory from '../LinearProgressBar.driver';
import LinearProgressBar from '../LinearProgressBar';

describe('LinearProgressBar', () => {
  const createDriver = createDriverFactory(linearProgressBarDriverFactory);

  const defaultProps = {
    value: 40,
  };

  describe('on error', () => {
    const errorProps = {
      error: true,
      errorMessage: 'No soup for you',
      showProgressIndication: true,
    };

    it('should display tooltip text only on hover', () => {
      const driver = createDriver(
        <LinearProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isTooltipShown()).toBe(false);
      driver.hoverErrorIcon();
      expect(driver.isTooltipShown()).toBe(true);
      expect(driver.getTooltipErrorMessage()).toContain(
        errorProps.errorMessage,
      );
    });

    it('should display error icon', () => {
      const driver = createDriver(
        <LinearProgressBar {...defaultProps} {...errorProps} />,
      );
      expect(driver.isErrorIconShown()).toBe(true);
    });
  });

  describe('on completion', () => {
    const successProps = {
      value: 100,
      showProgressIndication: true,
    };

    it('should display success icon', () => {
      const driver = createDriver(<LinearProgressBar {...successProps} />);
      expect(driver.isSuccessIconShown()).toBe(true);
    });
  });

  it(`should not throw an error when component isn't rendered`, () => {
    const driverFactoryWrapper = { createDriver };
    const isComponentRendered = false;

    jest.spyOn(driverFactoryWrapper, 'createDriver');
    driverFactoryWrapper.createDriver(
      <div>{isComponentRendered && <LinearProgressBar />}</div>,
    );

    expect(driverFactoryWrapper.createDriver).not.toThrow();
  });
});
