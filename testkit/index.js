/* eslint-disable */
/*
 * DO NOT EDIT THIS FILE.
 * YOUR CHANGES WILL BE OVERWRITTEN.
 * FILE IS BASED ON scripts/generate-testkit-exports/templates/vanilla.js
 * AND GENERATED BY scripts/generate-testkit-exports
 */
/* eslint-disable no-unused-vars */
import {
  testkitFactoryCreator,
  uniTestkitFactoryCreator,
} from 'wix-ui-test-utils/vanilla';

const load = module => {
  const MODULE_META_KEYS = ['__esModule'];

  const moduleFields = Object.keys(module).reduce((total, key) => {
    if (!MODULE_META_KEYS.includes(key)) {
      return total.concat(module[key]);
    }
    return total;
  }, []);

  let defaultOrFirstExport;
  if (module.default) {
    defaultOrFirstExport = module.default;
  } else if (moduleFields.length === 1) {
    defaultOrFirstExport = moduleFields[0];
  } else {
    defaultOrFirstExport = module;
  }
  return defaultOrFirstExport;
};

export const addItemTestkitFactory = testkitFactoryCreator(
  load(require('../src/AddItem/AddItem.driver')),
);
export const autoCompleteTestkitFactory = testkitFactoryCreator(
  load(require('../src/AutoComplete/AutoComplete.driver')),
);
export const autoCompleteCompositeTestkitFactory = testkitFactoryCreator(
  load(require('../src/AutoCompleteComposite/AutoCompleteComposite.driver')),
);
export const avatarTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/Avatar/Avatar.driver')),
);
export const badgeTestkitFactory = testkitFactoryCreator(
  load(require('../src/Badge/Badge.driver')),
);
export const badgeSelectTestkitFactory = testkitFactoryCreator(
  load(require('../src/BadgeSelect/BadgeSelect.driver')),
);
export const boxTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/Box/Box.driver')),
);
export const breadcrumbsTestkitFactory = testkitFactoryCreator(
  load(require('../src/Breadcrumbs/Breadcrumbs.driver')),
);
export const buttonTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/Button/Button.driver')),
);
export const calendarTestkitFactory = testkitFactoryCreator(
  load(require('../src/Calendar/Calendar.driver')),
);
export const calendarPanelTestkitFactory = testkitFactoryCreator(
  load(require('../src/CalendarPanel/CalendarPanel.driver')),
);
export const calendarPanelFooterTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/CalendarPanelFooter/CalendarPanelFooter.driver')),
);
export const cardGalleryItemTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/CardGalleryItem/CardGalleryItem.driver')),
);
export const carouselTestkitFactory = testkitFactoryCreator(
  load(require('../src/Carousel/Carousel.driver')),
);
export const checkboxTestkitFactory = testkitFactoryCreator(
  load(require('../src/Checkbox/Checkbox.driver')),
);
export const circularProgressBarTestkitFactory = testkitFactoryCreator(
  load(require('../src/CircularProgressBar/CircularProgressBar.driver')),
);
export const closeButtonTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/CloseButton/CloseButton.driver')),
);
export const colorInputTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/ColorInput/ColorInput.driver')),
);
export const colorPickerTestkitFactory = testkitFactoryCreator(
  load(require('../src/ColorPicker/ColorPicker.driver')),
);
export const contactItemBuilderTestkitFactory = testkitFactoryCreator(
  load(require('../src/ContactItemBuilder/ContactItemBuilder.driver')),
);
export const counterBadgeTestkitFactory = testkitFactoryCreator(
  load(require('../src/CounterBadge/CounterBadge.driver')),
);
export const dataTableTestkitFactory = testkitFactoryCreator(
  load(require('../src/DataTable/DataTable.driver')),
);
export const dateInputTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/DateInput/test/DateInput.uni.driver')),
);
export const datePickerTestkitFactory = testkitFactoryCreator(
  load(require('../src/DatePicker/DatePicker.driver')),
);
export const dropdownTestkitFactory = testkitFactoryCreator(
  load(require('../src/Dropdown/Dropdown.driver')),
);
export const dropdownBaseTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/DropdownBase/DropdownBase.driver')),
);
export const dropdownLayoutTestkitFactory = testkitFactoryCreator(
  load(require('../src/DropdownLayout/DropdownLayout.driver')),
);
export const editableSelectorTestkitFactory = testkitFactoryCreator(
  load(require('../src/EditableSelector/EditableSelector.driver')),
);
export const emptyStateTestkitFactory = testkitFactoryCreator(
  load(require('../src/EmptyState/EmptyState.driver')),
);
export const filePickerTestkitFactory = testkitFactoryCreator(
  load(require('../src/FilePicker/FilePicker.driver')),
);
export const floatingHelperTestkitFactory = testkitFactoryCreator(
  load(require('../src/FloatingHelper/FloatingHelper.driver')),
);
export const floatingNotificationTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/FloatingNotification/FloatingNotification.driver')),
);
export const formFieldTestkitFactory = testkitFactoryCreator(
  load(require('../src/FormField/FormField.driver')),
);
export const generatedTestComponentTestkitFactory = uniTestkitFactoryCreator(
  load(
    require('../src/GeneratedTestComponent/GeneratedTestComponent.uni.driver'),
  ),
);
export const genericModalLayoutTestkitFactory = testkitFactoryCreator(
  load(require('../src/GenericModalLayout/GenericModalLayout.driver')),
);
export const googleAddressInputWithLabelTestkitFactory = testkitFactoryCreator(
  load(
    require('../src/GoogleAddressInputWithLabel/GoogleAddressInputWithLabel.driver'),
  ),
);
export const headingTestkitFactory = testkitFactoryCreator(
  load(require('../src/Heading/Heading.driver')),
);
export const highlighterTestkitFactory = testkitFactoryCreator(
  load(require('../src/Highlighter/Highlighter.driver')),
);
export const iconButtonTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/IconButton/IconButton.driver')),
);
export const imageViewerTestkitFactory = testkitFactoryCreator(
  load(require('../src/ImageViewer/ImageViewer.driver')),
);
export const inputTestkitFactory = testkitFactoryCreator(
  load(require('../src/Input/Input.driver')),
);
export const inputAreaTestkitFactory = testkitFactoryCreator(
  load(require('../src/InputArea/InputArea.driver')),
);
export const inputWithOptionsTestkitFactory = testkitFactoryCreator(
  load(require('../src/InputWithOptions/InputWithOptions.driver')),
);
export const labelTestkitFactory = testkitFactoryCreator(
  load(require('../src/Label/Label.driver')),
);
export const linearProgressBarTestkitFactory = testkitFactoryCreator(
  load(require('../src/LinearProgressBar/LinearProgressBar.driver')),
);
export const loaderTestkitFactory = testkitFactoryCreator(
  load(require('../src/Loader/Loader.driver')),
);
export const modalTestkitFactory = testkitFactoryCreator(
  load(require('../src/Modal/Modal.driver')),
);
export const modalSelectorLayoutTestkitFactory = testkitFactoryCreator(
  load(require('../src/ModalSelectorLayout/ModalSelectorLayout.driver')),
);
export const multiSelectTestkitFactory = testkitFactoryCreator(
  load(require('../src/MultiSelect/MultiSelect.driver')),
);
export const multiSelectCheckboxTestkitFactory = testkitFactoryCreator(
  load(require('../src/MultiSelectCheckbox/MultiSelectCheckbox.driver')),
);
export const multiSelectCompositeTestkitFactory = testkitFactoryCreator(
  load(require('../src/MultiSelectComposite/MultiSelectComposite.driver')),
);
export const noBorderInputTestkitFactory = testkitFactoryCreator(
  load(require('../src/NoBorderInput/NoBorderInput.driver')),
);
export const notificationTestkitFactory = testkitFactoryCreator(
  load(require('../src/Notification/Notification.driver')),
);
export const pageTestkitFactory = testkitFactoryCreator(
  load(require('../src/Page/Page.driver')),
);
export const pageHeaderTestkitFactory = testkitFactoryCreator(
  load(require('../src/PageHeader/PageHeader.driver')),
);
export const popoverTestkitFactory = testkitFactoryCreator(
  load(require('../src/Popover/Popover.driver')),
);
export const popoverMenuTestkitFactory = testkitFactoryCreator(
  load(require('../src/PopoverMenu/PopoverMenu.driver')),
);
export const proportionTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/Proportion/Proportion.driver')),
);
export const radioGroupTestkitFactory = testkitFactoryCreator(
  load(require('../src/RadioGroup/RadioGroup.driver')),
);
export const rangeTestkitFactory = testkitFactoryCreator(
  load(require('../src/Range/Range.driver')),
);
export const richTextAreaTestkitFactory = testkitFactoryCreator(
  load(require('../src/RichTextArea/RichTextArea.driver')),
);
export const richTextAreaCompositeTestkitFactory = testkitFactoryCreator(
  load(require('../src/RichTextAreaComposite/RichTextAreaComposite.driver')),
);
export const richTextInputAreaTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/RichTextInputArea/RichTextInputArea.driver')),
);
export const searchTestkitFactory = testkitFactoryCreator(
  load(require('../src/Search/Search.driver')),
);
export const sectionHelperTestkitFactory = testkitFactoryCreator(
  load(require('../src/SectionHelper/SectionHelper.driver')),
);
export const segmentedToggleTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/SegmentedToggle/SegmentedToggle.driver')),
);
export const selectorTestkitFactory = testkitFactoryCreator(
  load(require('../src/Selector/Selector.driver')),
);
export const sideMenuTestkitFactory = testkitFactoryCreator(
  load(require('../src/SideMenu/core/SideMenu.driver')),
);
export const sideMenuDrillTestkitFactory = testkitFactoryCreator(
  load(require('../src/SideMenu/DrillView/DrillView.driver')),
);
export const skeletonTestkitFactory = testkitFactoryCreator(
  load(require('../src/Skeleton/Skeleton.driver')),
);
export const sliderTestkitFactory = testkitFactoryCreator(
  load(require('../src/Slider/Slider.driver')),
);
export const sortableListTestkitFactory = testkitFactoryCreator(
  load(require('../src/SortableList/SortableList.driver')),
);
export const statsWidgetTestkitFactory = testkitFactoryCreator(
  load(require('../src/StatsWidget/StatsWidget.driver')),
);
export const tableTestkitFactory = testkitFactoryCreator(
  load(require('../src/Table/Table.driver')),
);
export const tableActionCellTestkitFactory = testkitFactoryCreator(
  load(require('../src/TableActionCell/TableActionCell.driver')),
);
export const tabsTestkitFactory = testkitFactoryCreator(
  load(require('../src/Tabs/Tabs.driver')),
);
export const tagTestkitFactory = testkitFactoryCreator(
  load(require('../src/Tag/Tag.driver')),
);
export const textTestkitFactory = testkitFactoryCreator(
  load(require('../src/Text/Text.driver')),
);
export const textButtonTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/TextButton/TextButton.driver')),
);
export const thumbnailTestkitFactory = uniTestkitFactoryCreator(
  load(require('../src/Thumbnail/Thumbnail.driver')),
);
export const timeInputTestkitFactory = testkitFactoryCreator(
  load(require('../src/TimeInput/TimeInput.driver')),
);
export const toggleSwitchTestkitFactory = testkitFactoryCreator(
  load(require('../src/ToggleSwitch/ToggleSwitch.driver')),
);
export const tooltipTestkitFactory = testkitFactoryCreator(
  load(require('../src/Tooltip/Tooltip.driver')),
);
export const headerTestkitFactory = testkitFactoryCreator(
  load(require('../src/Card/Header/Header.driver')),
);
export const draggableTestkitFactory = testkitFactoryCreator(
  load(require('../src/DragAndDrop/Draggable/Draggable.driver')),
);
export const editableRowTestkitFactory = testkitFactoryCreator(
  load(require('../src/EditableSelector/EditableRow/EditableRow.driver')),
);
export const fieldLabelAttributesTestkitFactory = testkitFactoryCreator(
  load(require('../src/FieldLabelAttributes/FieldLabelAttributes.driver')),
);
export const fieldWithSelectionCompositeTestkitFactory = testkitFactoryCreator(
  load(
    require('../src/Composite/FieldWithSelectionComposite/FieldWithSelectionComposite.driver'),
  ),
);
export const radioButtonTestkitFactory = testkitFactoryCreator(
  load(require('../src/RadioGroup/RadioButton/RadioButton.driver')),
);
export const messageBoxMarketerialLayoutTestkitFactory = testkitFactoryCreator(
  load(require('../src/MessageBox/MessageBoxMarketerialLayout.driver')),
);
export const messageBoxFunctionalLayoutTestkitFactory = testkitFactoryCreator(
  load(require('../src/MessageBox/MessageBoxFunctionalLayout.driver')),
);
