import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';
import { teskitTooltip } from '../Tooltip/Tooltip.uni.driver';

export const addItemUniDriverFactory = base => {
  const tooltipDriver = () =>
    teskitTooltip(base.$(`[data-hook*="additem-tooltip"]`));
  const textDriver = () =>
    textUniDriverFactory(base.$(`[data-hook*="additem-text"]`));

  return {
    ...baseUniDriverFactory(base),
    /** returns value of action text */
    getText: () => textDriver().getText(),
    /** true if passed children in string exists */
    textExists: () => textDriver().exists(),
    /** returns driver of tooltip */
    getTooltipDriver: () => tooltipDriver(),
    /** returns value of tooltip content */
    getTooltipContent: () => tooltipDriver().hoverAndGetContent(),
  };
};
