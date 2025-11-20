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

// Re-export commonly used Blade components
// Consumers should ONLY import from @workindia/dsm, never from @razorpay/blade directly
export {
  Button,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardHeaderLeading,
  CardHeaderTrailing,
  TextInput,
  SelectInput,
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Badge,
  Alert,
  Spinner,
  Dropdown,
  DropdownOverlay,
  ActionList,
  ActionListItem,
  useTheme,
} from '@razorpay/blade/components';

// Re-export types
export type {
  ButtonProps,
  HeadingProps,
  TextProps,
  BoxProps,
  CardProps,
  TextInputProps,
  SelectInputProps,
  CheckboxProps,
  RadioProps,
  RadioGroupProps,
  SwitchProps,
  BadgeProps,
  AlertProps,
  SpinnerProps,
} from '@razorpay/blade/components';
