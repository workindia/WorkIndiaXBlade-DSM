/**
 * WorkIndia Design System - Wrapper around @razorpay/blade with restricted tokens
 *
 * This package provides:
 * - WorkIndiaProvider: Theme provider with restricted tokens
 * - Re-exported Blade components configured with WorkIndia theme
 * Package: @workindia/dsm
 */

// Export provider
export { WorkIndiaProvider } from './provider';
export type { WorkIndiaProviderProps } from './provider';

// Export theme
export { workIndiaTheme } from './theme';

// Re-export all Blade components
// Consumers should ONLY import from @workindia/dsm, never from @razorpay/blade directly
export {
  // Accordion
  Accordion,
  AccordionItemHeader,
  AccordionItemBody,
  AccordionItem,
  // ActionList
  ActionList,
  ActionListItem,
  ActionListItemAsset,
  // Alert
  Alert,
  // Amount
  Amount,
  // AnimateInteractions
  AnimateInteractions,
  // Avatar
  Avatar,
  // Badge
  Badge,
  // BladeProvider
  BladeProvider,
  // BottomNav
  BottomNav,
  BottomNavItem,
  // BottomSheet
  BottomSheet,
  BottomSheetBody,
  BottomSheetHeader,
  BottomSheetFooter,
  // Box
  Box,
  // Breadcrumb
  Breadcrumb,
  BreadcrumbItem,
  // Button
  Button,
  IconButton,
  // ButtonGroup
  ButtonGroup,
  // Card
  Card,
  CardBody,
  CardHeader,
  CardHeaderLeading,
  CardHeaderTrailing,
  CardFooter,
  CardFooterLeading,
  CardFooterTrailing,
  // Carousel
  Carousel,
  // Charts - exported via Charts module
  // Note: Individual chart components (AreaChart, BarChart, DonutChart, LineChart)
  // are available but need to be imported directly from Charts if needed
  // ChatMessage
  ChatMessage,
  // Checkbox
  Checkbox,
  CheckboxGroup,
  // Chip
  Chip,
  ChipGroup,
  // Collapsible
  Collapsible,
  CollapsibleBody,
  CollapsibleLink,
  // Counter
  Counter,
  // CounterInput
  CounterInput,
  // DatePicker
  DatePicker,
  FilterChipDatePicker,
  // Divider
  Divider,
  // Drawer
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  // Dropdown
  Dropdown,
  DropdownOverlay,
  DropdownButton,
  DropdownLink,
  DropdownIconButton,
  DropdownFooter,
  DropdownHeader,
  FilterChipSelectInput,
  FilterChipGroup,
  InputDropdownButton,
  // Elevate
  Elevate,
  // EmptyState
  EmptyState,
  // Fade
  Fade,
  // FileUpload
  FileUpload,
  // Icons - re-export all icons
  // Note: All icons are exported from Icons, commonly used ones listed below
  HomeIcon,
  SearchIcon,
  ActivityIcon,
  AnnouncementIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckIcon,
  InfoIcon,
  AlertCircleIcon,
  // InfoGroup
  InfoGroup,
  InfoItem,
  InfoItemKey,
  InfoItemValue,
  // Indicator
  Indicator,
  // Input components
  TextInput,
  SelectInput,
  AutoComplete,
  OTPInput,
  PasswordInput,
  TextArea,
  SearchInput,
  PhoneNumberInput,
  // InputGroup
  InputGroup,
  // Link
  Link,
  // List
  List,
  ListItem,
  ListItemLink,
  ListItemText,
  // Menu
  Menu,
  MenuItem,
  MenuOverlay,
  MenuHeader,
  MenuFooter,
  // Modal
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  // Move
  Move,
  // Morph
  Morph,
  // Navigation components
  TopNav,
  TopNavBrand,
  TopNavContent,
  TopNavActions,
  TabNav,
  TabNavItem,
  TabNavItems,
  // Popover
  Popover,
  PopoverInteractiveWrapper,
  // Preview
  Preview,
  PreviewBody,
  PreviewHeader,
  PreviewFooter,
  // ProgressBar
  ProgressBar,
  // Pagination
  Pagination,
  // QuickFilters
  QuickFilter,
  QuickFilterGroup,
  // Radio
  Radio,
  RadioGroup,
  // Scale
  Scale,
  // SideNav
  SideNav,
  SideNavLink,
  SideNavLevel,
  SideNavSection,
  SideNavItem,
  SideNavFooter,
  SideNavBody,
  // Skeleton
  Skeleton,
  // Slide
  Slide,
  // Spinner
  Spinner,
  // SpotlightPopoverTour
  SpotlightPopoverTour,
  SpotlightPopoverTourStep,
  SpotlightPopoverTourFooter,
  // Stagger
  Stagger,
  // StepGroup
  StepGroup,
  StepItem,
  StepItemIcon,
  StepItemIndicator,
  // Switch
  Switch,
  // Table
  Table,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
  TableFooterCell,
  TableFooterRow,
  TablePagination,
  TableToolbar,
  TableToolbarActions,
  TableEditableCell,
  TableEditableDropdownCell,
  // Tabs
  Tabs,
  TabItem,
  TabList,
  TabPanel,
  // Tag
  Tag,
  // TimePicker
  TimePicker,
  // Toast
  useToast,
  // Tooltip
  Tooltip,
  TooltipInteractiveWrapper,
  // Typography
  Heading,
  Text,
  Display,
  Code,
  // VisuallyHidden
  VisuallyHidden,
  // ListView
  ListView,
  ListViewFilters,
  // Hooks
  useTheme,
} from '@razorpay/blade/components';

// Re-export all types
export type {
  // Accordion
  AccordionProps,
  AccordionItemProps,
  // ActionList
  ActionListProps,
  ActionListItemProps,
  ActionListItemAssetProps,
  // Alert
  AlertProps,
  // Amount
  AmountProps,
  // AnimateInteractions
  AnimateInteractionsProps,
  // Avatar
  AvatarProps,
  // Badge
  BadgeProps,
  // BladeProvider
  BladeProviderProps,
  Theme,
  // BottomNav
  BottomNavProps,
  BottomNavItemProps,
  // BottomSheet
  BottomSheetProps,
  BottomSheetBodyProps,
  BottomSheetHeaderProps,
  BottomSheetFooterProps,
  // Box
  BoxProps,
  BoxRefType,
  // Breadcrumb
  BreadcrumbProps,
  BreadcrumbItemProps,
  // Button
  ButtonProps,
  IconButtonProps,
  // ButtonGroup
  ButtonGroupProps,
  // Card
  CardProps,
  // Carousel
  CarouselProps,
  // Charts - types exported via Charts module
  // ChatMessage
  ChatMessageProps,
  // Checkbox
  CheckboxProps,
  CheckboxGroupProps,
  // Chip
  ChipProps,
  ChipGroupProps,
  // Collapsible
  CollapsibleProps,
  // Counter
  CounterProps,
  // CounterInput - CounterInputProps exported from CounterInput component
  // DatePicker
  DatePickerProps,
  DateValue,
  DatesRangeValue,
  // Divider
  DividerProps,
  // Drawer
  DrawerProps,
  // Dropdown
  DropdownProps,
  DropdownOverlayProps,
  // Elevate
  ElevateProps,
  // EmptyState
  EmptyStateProps,
  // Fade
  FadeProps,
  // FileUpload
  FileUploadProps,
  // InfoGroup
  InfoGroupProps,
  InfoItemProps,
  // Indicator
  IndicatorProps,
  // Input components
  TextInputProps,
  SelectInputProps,
  AutoCompleteProps,
  OTPInputProps,
  PasswordInputProps,
  TextAreaProps,
  SearchInputProps,
  PhoneNumberInputProps,
  // InputGroup
  InputGroupProps,
  // Link
  LinkProps,
  // List
  ListProps,
  ListItemProps,
  ListItemLinkProps,
  ListItemTextProps,
  // Menu
  MenuProps,
  MenuItemProps,
  MenuOverlayProps,
  MenuHeaderProps,
  MenuFooterProps,
  // Modal
  ModalProps,
  ModalBodyProps,
  ModalHeaderProps,
  ModalFooterProps,
  // Move
  MoveProps,
  // Morph
  MorphProps,
  // Navigation
  TopNavProps,
  TabNavProps,
  TabNavItemProps,
  // Popover
  PopoverProps,
  PopoverTriggerProps,
  // Preview
  PreviewProps,
  PreviewBodyProps,
  PreviewHeaderProps,
  PreviewFooterProps,
  // ProgressBar
  ProgressBarProps,
  ProgressBarVariant,
  // Pagination
  PaginationProps,
  // QuickFilters - types exported from QuickFilters module
  // Radio
  RadioProps,
  RadioGroupProps,
  // Scale
  ScaleProps,
  // SideNav
  SideNavProps,
  SideNavLinkProps,
  SideNavSectionProps,
  SideNavItemProps,
  SideNavFooterProps,
  // Skeleton
  SkeletonProps,
  // Slide
  SlideProps,
  // Spinner
  SpinnerProps,
  // SpotlightPopoverTour
  SpotlightPopoverTourProps,
  SpotlightPopoverStepRenderProps,
  SpotlightPopoverTourSteps,
  // Stagger
  StaggerProps,
  // StepGroup
  StepGroupProps,
  StepItemProps,
  // Switch
  SwitchProps,
  // Table
  TableProps,
  TableBodyProps,
  TableCellProps,
  TableData,
  TableEditableCellProps,
  TableEditableDropdownCellProps,
  TableFooterCellProps,
  TableFooterProps,
  TableFooterRowProps,
  TableHeaderCellProps,
  TableHeaderProps,
  TableHeaderRowProps,
  TableNode,
  TablePaginationProps,
  TableRowProps,
  TableToolbarActionsProps,
  TableToolbarProps,
  Identifier,
  // Tabs
  TabsProps,
  TabItemProps,
  TabPanelProps,
  // Tag
  TagProps,
  // TimePicker - types exported from TimePicker module
  // Toast
  ToastProps,
  // Tooltip
  TooltipProps,
  // Typography
  HeadingProps,
  TextProps,
  DisplayProps,
  CodeProps,
  // VisuallyHidden
  VisuallyHiddenProps,
  // ListView - types exported from ListView module
  // Common types
  BladeCommonEvents,
  // Icon types
  IconComponent,
} from '@razorpay/blade/components';

// Export utilities
export { assignWithoutSideEffects } from './utils/assign-without-side-effects';
export type { DotNotationToken } from './utils/dot-notation-token';

// Custom WorkIndia components
export { SearchInputWithAdd } from './components/search-input-with-add';
export type { SearchInputWithAddProps } from './components/search-input-with-add';
