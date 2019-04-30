import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.driver';
import {BreadcrumbsDriver} from '../src/Breadcrumbs/Breadcrumbs.driver';
import {ButtonDriver} from '../src/Button/Button.uni.driver';
import {CalendarDriver} from '../src/Calendar/Calendar.driver';
import {CalendarPanelDriver} from '../src/CalendarPanel/CalendarPanel.driver';
import {CalendarPanelFooterDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {ThumbnailDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {TextButtonDriver} from '../src/TextButton/TextButton.uni.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';
import {TabsDriver} from '../src/Tabs/Tabs.driver';
import {DatePickerDriver} from '../src/DatePicker/DatePicker.driver';
import {DropdownBaseDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {LabelDriver} from '../src/Label/Label.driver';
import {DropdownLayoutDriver} from '../src/DropdownLayout/DropdownLayout.driver';
import {EditableSelectorDriver} from '../src/EditableSelector/EditableSelector.driver';
import {EmptyStateDriver} from '../src/EmptyState/EmptyState.driver';
import {FilePickerDriver} from '../src/FilePicker/FilePicker.driver';

declare namespace VanillaTestkit {
  type VanillaTestkitFactory<T extends BaseDriver> = (
    params: VanillaTeskitParams
  ) => T;

  type VanillaUniTestkitFactory<T extends BaseUniDriver> = (
    params: VanillaTeskitParams
  ) => T;

  interface VanillaTeskitParams {
    wrapper: HTMLElement;
    dataHook: string;
  }

  export const accordionTestkitFactory: any;
  export const addItemTestkitFactory: any;
  export const autoCompleteTestkitFactory: any;
  export const autoCompleteCompositeTestkitFactory: any;
  export const avatarTestkitFactory: VanillaUniTestkitFactory<AvatarDriver>;
  export const badgeSelectTestkitFactory: any;
  export const boxTestkitFactory: any;
  export const breadcrumbsTestkitFactory: any;
  export const buttonTestkitFactory: any;
  export const calendarTestkitFactory: any;
  export const calendarPanelTestkitFactory: any;
  export const calendarPanelFooterTestkitFactory: any;
  export const cardGalleryItemTestkitFactory: any;
  export const carouselTestkitFactory: any;
  export const checkboxTestkitFactory: any;
  export const circularProgressBarTestkitFactory: any;
  export const closeButtonTestkitFactory: any;
  export const colorInputTestkitFactory: any;
  export const colorPickerTestkitFactory: any;
  export const contactItemBuilderTestkitFactory: any;
  export const counterBadgeTestkitFactory: any;
  export const dataTableTestkitFactory: any;
  export const dateInputTestkitFactory: any;
  export const datePickerTestkitFactory: any;
  export const dropdownTestkitFactory: any;
  export const dropdownBaseTestkitFactory: any;
  export const dropdownLayoutTestkitFactory: any;
  export const editableSelectorTestkitFactory: any;
  export const editableTitleTestkitFactory: any;
  export const emptyStateTestkitFactory: any;
  export const errorIndicatorTestkitFactory: any;
  export const filePickerTestkitFactory: any;
  export const floatingHelperTestkitFactory: any;
  export const floatingNotificationTestkitFactory: any;
  export const formFieldTestkitFactory: any;
  export const generatedTestComponentTestkitFactory: any;
  export const genericModalLayoutTestkitFactory: any;
  export const googleAddressInputWithLabelTestkitFactory: any;
  export const googlePreviewTestkitFactory: any;
  export const headingTestkitFactory: any;
  export const highlighterTestkitFactory: any;
  export const iconButtonTestkitFactory: any;
  export const imageViewerTestkitFactory: any;
  export const inputTestkitFactory: any;
  export const inputAreaTestkitFactory: any;
  export const inputWithOptionsTestkitFactory: any;
  export const labelTestkitFactory: any;
  export const linearProgressBarTestkitFactory: any;
  export const loaderTestkitFactory: any;
  export const modalTestkitFactory: any;
  export const modalSelectorLayoutTestkitFactory: any;
  export const multiSelectTestkitFactory: any;
  export const multiSelectCheckboxTestkitFactory: any;
  export const multiSelectCompositeTestkitFactory: any;
  export const noBorderInputTestkitFactory: any;
  export const notificationTestkitFactory: any;
  export const numberInputTestkitFactory: any;
  export const pageTestkitFactory: any;
  export const pageHeaderTestkitFactory: any;
  export const popoverTestkitFactory: any;
  export const popoverMenuTestkitFactory: any;
  export const proportionTestkitFactory: any;
  export const radioGroupTestkitFactory: any;
  export const rangeTestkitFactory: any;
  export const richTextAreaTestkitFactory: any;
  export const richTextAreaCompositeTestkitFactory: any;
  export const richTextInputAreaTestkitFactory: any;
  export const searchTestkitFactory: any;
  export const sectionHelperTestkitFactory: any;
  export const segmentedToggleTestkitFactory: any;
  export const selectorTestkitFactory: any;
  export const sideMenuTestkitFactory: any;
  export const sideMenuDrillTestkitFactory: any;
  export const skeletonTestkitFactory: any;
  export const sliderTestkitFactory: any;
  export const socialPreviewTestkitFactory: any;
  export const sortableListTestkitFactory: any;
  export const statsWidgetTestkitFactory: any;
  export const tableTestkitFactory: any;
  export const tableActionCellTestkitFactory: any;
  export const tabsTestkitFactory: any;
  export const tagTestkitFactory: any;
  export const textTestkitFactory: any;
  export const textButtonTestkitFactory: any;
  export const thumbnailTestkitFactory: any;
  export const timeInputTestkitFactory: any;
  export const toggleSwitchTestkitFactory: any;
  export const headerTestkitFactory: any;
  export const draggableTestkitFactory: any;
  export const editableRowTestkitFactory: any;
  export const fieldLabelAttributesTestkitFactory: any;
  export const fieldWithSelectionCompositeTestkitFactory: any;
  export const radioButtonTestkitFactory: any;
  export const messageBoxMarketerialLayoutTestkitFactory: any;
  export const messageBoxFunctionalLayoutTestkitFactory: any;
  export const tooltipTestkitFactory: any;
  export const TooltipTestkit: any;
  export const badgeTestkitFactory: VanillaTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: VanillaTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: VanillaUniTestkitFactory<BoxDriver>;
  export const breadcrumbsTestkitFactory: VanillaTestkitFactory<BreadcrumbsDriver>;
  export const buttonTestkitFactory: VanillaUniTestkitFactory<ButtonDriver>;
  export const calendarTestkitFactory: VanillaTestkitFactory<CalendarDriver>;
  export const calendarPanelTestkitFactory: VanillaTestkitFactory<CalendarPanelDriver>
  export const calendarPanelFooterTestkitFactory: VanillaUniTestkitFactory<CalendarPanelFooterDriver>;
  export const cardGalleryItemTestkitFactory: VanillaUniTestkitFactory<CardGalleryItemDriver>
  export const checkboxTestkitFactory: VanillaUniTestkitFactory<CheckboxDriver>;
  export const circularProgressBarTestkitFactory: VanillaTestkitFactory<CircularProgressBarDriver>
  export const closeButtonTestkitFactory: VanillaUniTestkitFactory<CloseButtonDriver>;
  export const colorPickerTestkitFactory: VanillaTestkitFactory<ColorPickerDriver>;
  export const counterBadgeTestkitFactory: VanillaTestkitFactory<CounterBadgeDriver>;
  export const datePickerTestkitFactory: VanillaTestkitFactory<DatePickerDriver>;
  export const dropdownBaseTestkitFactory: VanillaUniTestkitFactory<DropdownBaseDriver>;
  export const dropdownLayoutTestkitFactory: VanillaTestkitFactory<DropdownLayoutDriver>;
  export const editableSelectorTestkitFactory: VanillaTestkitFactory<EditableSelectorDriver>;
  export const emptyStateTestkitFactory: VanillaTestkitFactory<EmptyStateDriver>;
  export const filePickerTestkitFactory: VanillaTestkitFactory<FilePickerDriver>;

  export const labelTestkitFactory: VanillaTestkitFactory<LabelDriver>;
  export const tabsTestkitFactory: VanillaTestkitFactory<TabsDriver>;
  export const tagTestkitFactory: VanillaTestkitFactory<TagDriver>;
  export const textTestkitFactory: VanillaTestkitFactory<TextDriver>;
  export const textButtonTestkitFactory: VanillaUniTestkitFactory<TextButtonDriver>;
  export const thumbnailTestkitFactory: VanillaUniTestkitFactory<ThumbnailDriver>;
  export const timeInputTestkitFactory: VanillaTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: VanillaTestkitFactory<ToggleSwitchDriver>;
  export const tooltipTestkitFactory: VanillaUniTestkitFactory<TooltipDriver>;
}

export = VanillaTestkit;
