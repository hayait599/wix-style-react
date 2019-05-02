import {BaseUniDriver} from 'wix-ui-test-utils/base-driver';
import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import {ReactWrapper} from 'enzyme';
import {AvatarDriver} from '../src/Avatar/Avatar.driver';
import {AccordionDriver} from '../src/Accordion/Accordion.uni.driver';
import {BadgeDriver} from '../src/Badge/Badge.driver';
import {BadgeSelectDriver} from '../src/BadgeSelect/BadgeSelect.driver';
import {BoxDriver} from '../src/Box/Box.uni.driver';
import {ToggleSwitchDriver} from '../src/ToggleSwitch/ToggleSwitch.driver';
import {TimeInputDriver} from '../src/TimeInput/TimeInput.uni.driver';
import {TooltipDriver} from '../src/Tooltip/Tooltip.uni.driver';
import {BreadcrumbsDriver} from '../src/Breadcrumbs/Breadcrumbs.uni.driver';
import {ButtonDriver} from '../src/Button/Button.uni.driver';
import {CalendarDriver} from '../src/Calendar/Calendar.uni.driver';
import {CalendarPanelDriver} from '../src/CalendarPanel/CalendarPanel.uni.driver';
import {CalendarPanelFooterDriver} from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';
import {CardGalleryItemDriver} from '../src/CardGalleryItem/CardGalleryItem.uni.driver';
import {ThumbnailDriver} from '../src/Thumbnail/Thumbnail.uni.driver';
import {CheckboxDriver} from '../src/Checkbox/Checkbox.uni.driver';
import {TextButtonDriver} from '../src/TextButton/TextButton.uni.driver';
import {CircularProgressBarDriver} from '../src/CircularProgressBar/CircularProgressBar.driver';
import {CloseButtonDriver} from '../src/CloseButton/CloseButton.uni.driver';
import {TextDriver} from '../src/Text/Text.driver';
import {TagDriver} from '../src/Tag/Tag.driver';
import {ColorPickerDriver} from '../src/ColorPicker/ColorPicker.uni.driver';
import {CounterBadgeDriver} from '../src/CounterBadge/CounterBadge.driver';
import {TabsDriver} from '../src/Tabs/Tabs.uni.driver';
import {DatePickerDriver} from '../src/DatePicker/DatePicker.driver';
import {DropdownBaseDriver} from '../src/DropdownBase/DropdownBase.uni.driver';
import {LabelDriver} from '../src/Label/Label.driver';
import {DropdownLayoutDriver} from '../src/DropdownLayout/DropdownLayout.driver';
import {EditableSelectorDriver} from '../src/EditableSelector/EditableSelector.driver';
import {EmptyStateDriver} from '../src/EmptyState/EmptyState.driver';
import {FilePickerDriver} from '../src/FilePicker/FilePicker.driver';
import {FloatingHelperDriver} from '../src/FloatingHelper/FloatingHelper.driver';
import {FloatingNotificationDriver} from '../src/FloatingNotification/FloatingNotification.uni.driver';
import {FormFieldDriver} from '../src/FormField/FormField.uni.driver';
import {GenericModalLayoutDriver} from '../src/GenericModalLayout/GenericModalLayout.driver';
import {HeadingDriver} from '../src/Heading/Heading.driver';
import {HighlighterDriver} from '../src/Highlighter/Highlighter.driver';
import {IconButtonDriver} from '../src/IconButton/IconButton.uni.driver';
import {ImageViewerDriver} from '../src/ImageViewer/ImageViewer.driver';
import {TableActionCellDriver} from '../src/TableActionCell/TableActionCell.driver';
import {InputDriver} from '../src/Input/Input.uni.driver';
import {InputAreaDriver} from '../src/InputArea/InputArea.driver';
import {InputWithOptionsDriver} from '../src/InputWithOptions/InputWithOptions.driver';
import {LinearProgressBarDriver} from '../src/LinearProgressBar/LinearProgressBar.driver';
import {LoaderDriver} from '../src/Loader/Loader.driver';
import {DataTableDriver} from '../src/DataTable/DataTable.driver';
import {TableDriver} from '../src/Table/Table.driver';

declare namespace EnzymeTestkit {
  type EnzymeTestkitFactory<T extends BaseDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  type EnzymeUniTestkitFactory<T extends BaseUniDriver> = (
    params: EnzymeTestkitParams
  ) => T;

  interface EnzymeTestkitParams {
    wrapper: ReactWrapper;
    dataHook: string;
  }

  export const avatarTestkitFactory: EnzymeUniTestkitFactory<AvatarDriver>;
  export const badgeTestkitFactory: EnzymeTestkitFactory<BadgeDriver>;
  export const badgeSelectTestkitFactory: EnzymeTestkitFactory<BadgeSelectDriver>;
  export const boxTestkitFactory: EnzymeUniTestkitFactory<BoxDriver>;
  export const buttonTestkitFactory: EnzymeUniTestkitFactory<ButtonDriver>;
  export const breadcrumbsTestkitFactory: EnzymeUniTestkitFactory<BreadcrumbsDriver>;
  export const calendarTestkitFactory: EnzymeUniTestkitFactory<CalendarDriver>;
  export const calendarPanelTestkitFactory: EnzymeUniTestkitFactory<CalendarPanelDriver>
  export const calendarPanelFooterTestkitFactory: EnzymeUniTestkitFactory<CalendarPanelFooterDriver>;
  export const cardGalleryItemTestkitFactory: EnzymeUniTestkitFactory<CardGalleryItemDriver>
  export const checkboxTestkitFactory: EnzymeUniTestkitFactory<CheckboxDriver>;
  export const circularProgressBarTestkitFactory: EnzymeTestkitFactory<CircularProgressBarDriver>
  export const closeButtonTestkitFactory: EnzymeUniTestkitFactory<CloseButtonDriver>;
  export const colorPickerTestkitFactory: EnzymeUniTestkitFactory<ColorPickerDriver>;
  export const counterBadgeTestkitFactory: EnzymeTestkitFactory<CounterBadgeDriver>;
  export const dataTableTestkitFactory: EnzymeTestkitFactory<DataTableDriver>;
  export const datePickerTestkitFactory: EnzymeTestkitFactory<DatePickerDriver>;
  export const dropdownBaseTestkitFactory: EnzymeUniTestkitFactory<DropdownBaseDriver>;
  export const dropdownLayoutTestkitFactory: EnzymeTestkitFactory<DropdownLayoutDriver>;
  export const editableSelectorTestkitFactory: EnzymeTestkitFactory<EditableSelectorDriver>;
  export const emptyStateTestkitFactory: EnzymeTestkitFactory<EmptyStateDriver>;
  export const filePickerTestkitFactory: EnzymeTestkitFactory<FilePickerDriver>;
  export const floatingHelperTestkitFactory: EnzymeTestkitFactory<FloatingHelperDriver>;
  export const floatingNotificationTestkitFactory: EnzymeUniTestkitFactory<FloatingNotificationDriver>;
  export const formFieldTestkitFactory: EnzymeUniTestkitFactory<FormFieldDriver>;
  export const genericModalLayoutTestkitFactory: EnzymeTestkitFactory<GenericModalLayoutDriver>;
  export const headingTestkitFactory: EnzymeTestkitFactory<HeadingDriver>;
  export const highlighterTestkitFactory: EnzymeTestkitFactory<HighlighterDriver>;
  export const iconButtonTestkitFactory: EnzymeUniTestkitFactory<IconButtonDriver>;
  export const imageViewerTestkitFactory: EnzymeTestkitFactory<ImageViewerDriver>;
  export const inputTestkitFactory: EnzymeUniTestkitFactory<InputDriver>;
  export const inputAreaTestkitFactory: EnzymeTestkitFactory<InputAreaDriver>;
  export const inputWithOptionsTestkitFactory: EnzymeTestkitFactory<InputWithOptionsDriver>;
  export const labelTestkitFactory: EnzymeTestkitFactory<LabelDriver>;
  export const linearProgressBarTestkitFactory: EnzymeTestkitFactory<LinearProgressBarDriver>;
  export const loaderTestkitFactory: EnzymeTestkitFactory<LoaderDriver>;

  export const tableTestkitFactory: EnzymeTestkitFactory<TableDriver>;
  export const tableActionCellTestkitFactory: EnzymeTestkitFactory<TableActionCellDriver>;
  export const tabsTestkitFactory: EnzymeTestkitFactory<TabsDriver>;
  export const tagTestkitFactory: EnzymeTestkitFactory<TagDriver>;
  export const textTestkitFactory: EnzymeTestkitFactory<TextDriver>;
  export const textButtonTestkitFactory: EnzymeUniTestkitFactory<TextButtonDriver>;
  export const thumbnailTestkitFactory: EnzymeUniTestkitFactory<ThumbnailDriver>;
  export const timeInputTestkitFactory: EnzymeUniTestkitFactory<TimeInputDriver>;
  export const toggleSwitchTestkitFactory: EnzymeTestkitFactory<ToggleSwitchDriver>;
  export const tooltipTestkitFactory: EnzymeUniTestkitFactory<TooltipDriver>;

  export const accordionTestkitFactory: any;
  export const addItemTestkitFactory: any;
  export const autoCompleteTestkitFactory: any;
  export const autoCompleteCompositeTestkitFactory: any;
  export const carouselTestkitFactory: any;
  export const colorInputTestkitFactory: any;
  export const contactItemBuilderTestkitFactory: any;
  export const dateInputTestkitFactory: any;
  export const dropdownTestkitFactory: any;
  export const editableTitleTestkitFactory: any;
  export const errorIndicatorTestkitFactory: any;
  export const generatedTestComponentTestkitFactory: any;
  export const googleAddressInputWithLabelTestkitFactory: any;
  export const googlePreviewTestkitFactory: any;
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
  export const headerTestkitFactory: any;
  export const draggableTestkitFactory: any;
  export const editableRowTestkitFactory: any;
  export const fieldLabelAttributesTestkitFactory: any;
  export const fieldWithSelectionCompositeTestkitFactory: any;
  export const radioButtonTestkitFactory: any;
  export const messageBoxMarketerialLayoutTestkitFactory: any;
  export const messageBoxFunctionalLayoutTestkitFactory: any;
}

export = EnzymeTestkit;
