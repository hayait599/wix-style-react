import React from 'react';
import {
  createRendererWithDriver,
  createRendererWithUniDriver,
  cleanup,
} from '../../test/utils/react';
import { mount } from 'enzyme';

import addItemDriverFactory from './AddItem.driver';
import { addItemUniDriverFactory } from './AddItem.uni.driver';

import AddItem from './AddItem';

describe('AddItem', () => {
  const renderAddItem = (props = {}) => <AddItem {...props} />;

  describe('[sync]', () => {
    runTests(createRendererWithDriver(addItemDriverFactory));
  });

  describe('[async]', () => {
    runTests(createRendererWithUniDriver(addItemUniDriverFactory));
  });

  function runTests(render) {
    afterEach(() => cleanup());

    describe('`children` prop (driver tests)', () => {
      const text = 'Add New Item';
      it('should render text component when string is passed', async () => {
        const { driver } = render(renderAddItem({ children: text }));
        expect(await driver.getText()).toEqual(text);
      });

      it('should not render text when children is undefined', async () => {
        const { driver } = render(renderAddItem());
        expect(await driver.textExists()).toEqual(false);
      });

      it('should not render children as string when theme is `image`', async () => {
        const { driver } = render(
          renderAddItem({ children: text, theme: 'image' }),
        );
        expect(await driver.textExists()).toEqual(false);
      });
    });

    describe('`onClick` prop', () => {
      it('should call onClick when clicked', async () => {
        const onClick = jest.fn();
        const { driver } = render(renderAddItem({ onClick, theme: 'image' }));
        await driver.click();
        expect(onClick).toHaveBeenCalled();
      });
    });

    describe('`disable` prop ', () => {
      it('should not call onClick when disabled', async () => {
        const onClick = jest.fn();
        const { driver } = render(renderAddItem({ onClick, disabled: true }));
        await driver.click();
        expect(onClick).not.toHaveBeenCalled();
      });
    });
  }

  it('should have correct displayName', () => {
    const wrapper = mount(renderAddItem());
    expect(wrapper.name()).toEqual('WithFocusable(AddItem)');
  });

  describe('`children` prop (mount tests)', () => {
    const child = <div data-hook="child">Hello</div>;
    it('should render children as component', () => {
      const wrapper = mount(renderAddItem({ children: child }));
      expect(wrapper.find(`[data-hook*="child"]`).exists()).toEqual(true);
    });
    it('should not render children as component when theme is `image`', () => {
      const wrapper = mount(renderAddItem({ children: child, theme: 'image' }));
      expect(wrapper.find(`[data-hook*="child"]`).exists()).toEqual(false);
    });
  });

  describe('Icon svg', () => {
    it('should render', () => {
      const wrapper = mount(renderAddItem());
      expect(wrapper.find(`[data-hook*="additem-icon"]`).exists()).toEqual(
        true,
      );
    });
  });

  describe('Tooltip', () => {
    const tooltipContent = 'I am ToolTip';
    it(`should not render when disabled`, () => {
      const wrapper = mount(renderAddItem({ tooltipContent, disabled: true }));
      expect(wrapper.find(`[data-hook*="additem-tooltip"]`).exists()).toEqual(
        false,
      );
    });
  });
});
