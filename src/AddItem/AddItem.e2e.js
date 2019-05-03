import { eyesItInstance } from '../../test/utils/eyes-it';
import autoExampleDriver from 'wix-storybook-utils/AutoExampleDriver';

import { createStoryUrl } from '../../test/utils/storybook-helpers';

import { storySettings } from './docs/storySettings';

describe('AddItem', () => {
  const storyUrl = createStoryUrl({
    kind: storySettings.kind,
    story: storySettings.storyName,
  });

  const eyes = eyesItInstance();

  beforeAll(async () => {
    await browser.get(storyUrl);
  });

  beforeEach(() => {
    return autoExampleDriver.remount();
  });

  describe(`'alignItems' prop`, () => {
    ['', 'left', 'right'].map(alignItems =>
      eyes.it(`should render with value ${alignItems}`, async () => {
        await autoExampleDriver.setProps({ alignItems });
      }),
    );
  });

  describe(`'theme' prop`, () => {
    ['', 'filled', 'plain', 'image'].map(theme =>
      eyes.it(`should render with theme ${theme}`, async () => {
        await autoExampleDriver.setProps({ theme });
      }),
    );
  });

  describe(`'size' prop`, () => {
    ['large', 'medium', 'small', ''].map(size =>
      eyes.it(`should render with ${size} icon`, async () => {
        await autoExampleDriver.setProps({ size });
      }),
    );
  });

  describe(`'disabled' prop`, () => {
    ['dashes', 'filled', 'plain', 'image'].map(theme =>
      eyes.it(`should render with theme ${theme}`, async () => {
        await autoExampleDriver.setProps({ disabled: true, theme });
      }),
    );
  });
});
