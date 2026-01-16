/**
 * Example consumer application using WorkIndia Design System
 * This demonstrates proper usage of @workindia/dsm components and locked-down tokens
 */

import { useState } from 'react';
import {
  WorkIndiaProvider,
  Button,
  Heading,
  Text,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardHeaderLeading,
  TextInput,
  SelectInput,
  Checkbox,
  RadioGroup,
  Radio,
  Switch,
  Badge,
  Alert,
  Spinner,
  Dropdown,
  DropdownOverlay,
  ActionList,
  ActionListItem,
  Tabs,
  TabList,
  TabItem,
  TabPanel,
  Code,
  useTheme,
} from '@workindia/dsm';
import {
  Colors,
  Spacing,
  Typography,
  Breakpoints,
  Border,
  Elevation,
  type ElevationLevels,
} from '@workindia/tokens';
import { workIndiaTheme } from '@workindia/dsm';
import * as Icons from '@workindia/icons';
import type { IconComponent } from '@workindia/icons';

/**
 * Calculate the relative luminance of a color
 * Returns a value between 0 (dark) and 1 (light)
 * @param color - Color string (hex or rgba)
 * @returns Luminance value between 0 and 1
 */
const getLuminance = (color: string): number => {
  // Handle rgba colors
  if (color.startsWith('rgba')) {
    const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)/;
    const match = regex.exec(color);
    if (match) {
      const [, r, g, b] = match.map(Number);
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
  }

  // Handle hex colors
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
};

/**
 * Get contrasting text color (black or white) based on background color
 * @param backgroundColor - Background color string
 * @returns Contrasting color string ('#000000' or '#FFFFFF')
 */
const getContrastColor = (backgroundColor: string): string => {
  const luminance = getLuminance(backgroundColor);
  // Use white text for dark backgrounds (luminance < 0.5), black for light
  return luminance < 0.5
    ? Colors.neutral.blackNWhite.white[500]
    : Colors.neutral.blackNWhite.black[500];
};

/**
 * Get all icon components from the icons package
 * Filters out non-icon exports (types, utilities, etc.)
 * @returns Array of icon entries with name and component
 */
const getAllIcons = (): { name: string; Icon: IconComponent }[] => {
  const iconEntries: { name: string; Icon: IconComponent }[] = [];

  // Filter out non-icon exports
  const excludedKeys = [
    'Svg',
    'Path',
    'useIconProps',
    'isIconComponent',
    // Type exports (they start with uppercase but are types)
  ];

  Object.entries(Icons).forEach(([name, value]) => {
    // Check if it's a valid icon component (function/component that's not excluded)
    if (
      !excludedKeys.includes(name) &&
      typeof value === 'function' &&
      name.endsWith('Icon')
    ) {
      iconEntries.push({
        name,
        Icon: value as IconComponent,
      });
    }
  });

  // Sort icons alphabetically
  return iconEntries.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Inner App Content component that uses theme context
 * This component must be inside WorkIndiaProvider to access useTheme
 */
const AppContent = () => {
  const { colorScheme, setColorScheme } = useTheme();
  const [textInputValue, setTextInputValue] = useState('');
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');

  return (
    <Box
      padding="spacing.5"
      maxWidth="1200px"
      margin="auto"
      minHeight="100vh"
      backgroundColor="surface.background.gray.subtle"
    >
      {/* Header */}
      <Box marginBottom="spacing.8">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          marginBottom="spacing.2"
        >
          <Box>
            <Heading size="2xlarge">WorkIndia Design System</Heading>
            <Text marginTop="spacing.2" color="surface.text.gray.subtle">
              A locked-down design system built on @razorpay/blade with
              restricted tokens
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap="spacing.2"
          >
            <Text size="small" color="surface.text.gray.subtle">
              {colorScheme === 'light' ? 'Light' : 'Dark'} Mode
            </Text>
            <Switch
              accessibilityLabel="Toggle dark mode"
              isChecked={colorScheme === 'dark'}
              onChange={({ isChecked }: { isChecked: boolean }) => {
                setColorScheme(isChecked ? 'dark' : 'light');
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Tabs for Tokens, Components, and Icons */}
      <Tabs
        value={activeTab}
        onChange={(value: string) => {
          setActiveTab(value);
        }}
        variant="bordered"
      >
        <TabList>
          <TabItem value="tokens">Tokens</TabItem>
          <TabItem value="components">Components</TabItem>
          <TabItem value="icons">Icons</TabItem>
        </TabList>

        {/* Tokens Tab Panel */}
        <TabPanel value="tokens">
          <Box paddingTop="spacing.6">
            {/* Color Tokens Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Color Tokens" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Theme colors are semantic tokens that are used throughout the
                  design system components. These colors adapt to the selected
                  color scheme (light/dark mode).
                </Text>

                {/* Surface Colors */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Surface Colors
                  </Heading>
                  <Text
                    marginBottom="spacing.4"
                    color="surface.text.gray.subtle"
                  >
                    Surface colors are used for backgrounds, text, and borders
                    in the main content areas.
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.4"
                    flexWrap="wrap"
                  >
                    {/* Surface Background */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        surface.background.primary
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.surface.background
                            .primary,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Surface Text Gray */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        surface.text.gray
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.surface.text.gray,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Surface Text StaticBlack */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        surface.text.staticBlack
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.surface.text
                            .staticBlack,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Surface Text StaticWhite */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        surface.text.staticWhite
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.surface.text
                            .staticWhite,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Interactive Colors */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Interactive Colors
                  </Heading>
                  <Text
                    marginBottom="spacing.4"
                    color="surface.text.gray.subtle"
                  >
                    Interactive colors are used for buttons, links, and other
                    interactive elements.
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.4"
                    flexWrap="wrap"
                  >
                    {/* Interactive Background Primary */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        interactive.background.primary
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.interactive.background
                            .primary,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Interactive Border Primary */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        interactive.border.primary
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.interactive.border
                            .primary,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Interactive Text Primary */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        interactive.text.primary
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.interactive.text
                            .primary,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Interactive Icon Primary */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        interactive.icon.primary
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.interactive.icon
                            .primary,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {/* Feedback Colors */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Feedback Colors
                  </Heading>
                  <Text
                    marginBottom="spacing.4"
                    color="surface.text.gray.subtle"
                  >
                    Feedback colors are used for alerts, badges, and status
                    indicators to convey success, error, or other states.
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.4"
                    flexWrap="wrap"
                  >
                    {/* Feedback Background Positive */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.background.positive
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.background
                            .positive,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Background Negative */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.background.negative
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.background
                            .negative,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Text Positive */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.text.positive
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.text.positive,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Text Negative */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.text.negative
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.text.negative,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Border Positive */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.border.positive
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.border
                            .positive,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Border Negative */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.border.negative
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.border
                            .negative,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Icon Positive */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.icon.positive
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.icon.positive,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>

                    {/* Feedback Icon Negative */}
                    <Box>
                      <Text weight="semibold" marginBottom="spacing.2">
                        feedback.icon.negative
                      </Text>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="spacing.1"
                        borderRadius="small"
                        overflow="hidden"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                      >
                        {Object.entries(
                          workIndiaTheme.colors.onLight.feedback.icon.negative,
                        ).map(([key, value]: [string, string]) => {
                          const textColor = getContrastColor(value);
                          return (
                            <div
                              key={key}
                              style={{
                                backgroundColor: value,
                                color: textColor,
                                padding: '8px',
                                minWidth: '200px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <Text size="small" color="currentColor">
                                {key}
                              </Text>
                              <Text size="small" color="currentColor">
                                {value}
                              </Text>
                            </div>
                          );
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardBody>
            </Card>

            {/* Spacing Tokens Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Spacing Tokens" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Only these spacing values are allowed in the design system.
                </Text>
                <Box display="flex" flexDirection="column" gap="spacing.3">
                  {Object.entries(Spacing).map(
                    ([key, value]: [string, number]) => (
                      <Box
                        key={key}
                        display="flex"
                        alignItems="center"
                        gap="spacing.4"
                      >
                        <Box minWidth="80px">
                          <Text weight="semibold">{key}:</Text>
                        </Box>
                        <Box
                          backgroundColor="surface.background.gray.moderate"
                          height={`${String(value)}px`}
                          minWidth={`${String(value)}px`}
                          borderRadius="small"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          paddingX="spacing.2"
                        >
                          <Text size="small">{value}px</Text>
                        </Box>
                      </Box>
                    ),
                  )}
                </Box>
              </CardBody>
            </Card>

            {/* Typography Tokens Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Typography Tokens" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Typography uses Inter font family for all text and headings.
                </Text>

                {/* Font Sizes */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Font Sizes
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.2">
                    {Object.entries(Typography.fontSize).map(
                      ([key, value]: [string, number]) => (
                        <Box
                          key={key}
                          display="flex"
                          alignItems="center"
                          gap="spacing.4"
                        >
                          <Box minWidth="100px">
                            <Text weight="semibold">{key}:</Text>
                          </Box>
                          <div style={{ fontSize: `${String(value)}px` }}>
                            <Text size="medium">
                              {String(value)}px - Sample Text
                            </Text>
                          </div>
                        </Box>
                      ),
                    )}
                  </Box>
                </Box>

                {/* Font Weights */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Font Weights
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.2">
                    {Object.entries(Typography.fontWeight).map(
                      ([key, value]: [string, number]) => (
                        <Box
                          key={key}
                          display="flex"
                          alignItems="center"
                          gap="spacing.4"
                        >
                          <Box minWidth="100px">
                            <Text weight="semibold">{key}:</Text>
                          </Box>
                          <Text
                            weight={
                              value === 400
                                ? 'regular'
                                : value === 500
                                  ? 'medium'
                                  : 'semibold'
                            }
                          >
                            {value} - Sample Text
                          </Text>
                        </Box>
                      ),
                    )}
                  </Box>
                </Box>

                {/* Font Families */}
                <Box>
                  <Heading size="medium" marginBottom="spacing.3">
                    Font Families
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.2">
                    {Object.entries(Typography.fontFamily).map(
                      ([key, value]: [string, string]) => (
                        <Box
                          key={key}
                          display="flex"
                          flexDirection="column"
                          gap="spacing.1"
                        >
                          <Text weight="semibold">{key}:</Text>
                          <div style={{ fontFamily: value }}>
                            <Text size="medium">{value}</Text>
                          </div>
                        </Box>
                      ),
                    )}
                  </Box>
                </Box>
              </CardBody>
            </Card>

            {/* Heading Font Verification Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Heading Font Verification" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  This section verifies that the Heading component uses Inter
                  font (not TASA Orbiter). Check the computed font-family in
                  your browser's developer tools.
                </Text>

                <Box marginBottom="spacing.5">
                  <Heading size="large" marginBottom="spacing.3">
                    Heading Component Test
                  </Heading>
                  <Text marginBottom="spacing.2">
                    The heading above should use Inter font family. Inspect the
                    element to verify:
                  </Text>
                  <Box
                    padding="spacing.3"
                    backgroundColor="surface.background.gray.subtle"
                    borderRadius="medium"
                  >
                    <Code size="small">
                      font-family: &quot;Inter&quot;, &quot;Inter Fallback
                      Arial&quot;, Arial, sans-serif
                    </Code>
                  </Box>
                </Box>

                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    All Heading Sizes
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    <Box>
                      <Heading size="small">Small Heading (Inter)</Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Size: small
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="medium">Medium Heading (Inter)</Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Size: medium
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="large">Large Heading (Inter)</Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Size: large
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="xlarge">
                        Extra Large Heading (Inter)
                      </Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Size: xlarge
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="2xlarge">2X Large Heading (Inter)</Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Size: 2xlarge
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Heading size="medium" marginBottom="spacing.3">
                    Comparison: Heading vs Text
                  </Heading>
                  <Text marginBottom="spacing.2">
                    Both should use Inter font (not TASA Orbiter):
                  </Text>
                  <Box display="flex" flexDirection="column" gap="spacing.2">
                    <Box>
                      <Heading size="medium">This is a Heading</Heading>
                      <Text size="small" color="surface.text.gray.subtle">
                        Heading component - should use Inter
                      </Text>
                    </Box>
                    <Box>
                      <Text size="medium" weight="semibold">
                        This is Text with semibold weight
                      </Text>
                      <Text size="small" color="surface.text.gray.subtle">
                        Text component - should use Inter
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </CardBody>
            </Card>

            {/* Breakpoints Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Breakpoint Tokens" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Breakpoint tokens for responsive design (mobile-first
                  approach).
                </Text>
                <Box display="flex" flexDirection="column" gap="spacing.3">
                  {Object.entries(Breakpoints).map(
                    ([key, value]: [string, number]) => (
                      <Box
                        key={key}
                        display="flex"
                        alignItems="center"
                        gap="spacing.4"
                      >
                        <Box minWidth="100px">
                          <Text weight="semibold">{key}:</Text>
                        </Box>
                        <Box
                          backgroundColor="surface.background.gray.moderate"
                          paddingX="spacing.3"
                          paddingY="spacing.2"
                          borderRadius="small"
                        >
                          <Text size="small">{value}px</Text>
                        </Box>
                        <Text size="small" color="surface.text.gray.muted">
                          {key === 'base'
                            ? 'Mobile-first base (0px+)'
                            : key === 'xs'
                              ? 'Small Mobiles'
                              : key === 's'
                                ? 'Mobiles and Small Tablets'
                                : key === 'm'
                                  ? 'Medium and Large Tablets'
                                  : key === 'l'
                                    ? 'Desktop'
                                    : 'HD Desktop'}
                        </Text>
                      </Box>
                    ),
                  )}
                </Box>
              </CardBody>
            </Card>

            {/* Border Tokens Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Border Tokens" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Border radius and width tokens for consistent border styling.
                </Text>

                {/* Border Radius */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Border Radius
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    {Object.entries(Border.radius).map(
                      ([key, value]: [string, number | string]) => (
                        <Box
                          key={key}
                          display="flex"
                          alignItems="center"
                          gap="spacing.4"
                        >
                          <Box minWidth="120px">
                            <Text weight="semibold">{key}:</Text>
                          </Box>
                          <Box
                            backgroundColor="surface.background.gray.moderate"
                            paddingX="spacing.3"
                            paddingY="spacing.2"
                            borderRadius="small"
                            minWidth="80px"
                          >
                            <Text size="small">
                              {typeof value === 'string'
                                ? value
                                : `${String(value)}px`}
                            </Text>
                          </Box>
                          {typeof value === 'number' && value > 0 && (
                            <Box
                              width="60px"
                              height="60px"
                              backgroundColor="surface.background.gray.subtle"
                              borderRadius={
                                key as
                                  | 'none'
                                  | 'xsmall'
                                  | 'small'
                                  | 'medium'
                                  | 'large'
                                  | 'xlarge'
                                  | '2xlarge'
                                  | 'max'
                                  | 'round'
                              }
                              borderWidth="thin"
                              borderColor="surface.border.gray.subtle"
                            />
                          )}
                          {key === 'round' && (
                            <Box
                              width="60px"
                              height="60px"
                              backgroundColor="surface.background.gray.subtle"
                              borderRadius="round"
                              borderWidth="thin"
                              borderColor="surface.border.gray.subtle"
                            />
                          )}
                        </Box>
                      ),
                    )}
                  </Box>
                </Box>

                {/* Border Width */}
                <Box>
                  <Heading size="medium" marginBottom="spacing.3">
                    Border Width
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    {Object.entries(Border.width).map(
                      ([key, value]: [string, number]) => (
                        <Box
                          key={key}
                          display="flex"
                          alignItems="center"
                          gap="spacing.4"
                        >
                          <Box minWidth="120px">
                            <Text weight="semibold">{key}:</Text>
                          </Box>
                          <Box
                            backgroundColor="surface.background.gray.moderate"
                            paddingX="spacing.3"
                            paddingY="spacing.2"
                            borderRadius="small"
                            minWidth="80px"
                          >
                            <Text size="small">{String(value)}px</Text>
                          </Box>
                          {value > 0 && (
                            <Box
                              width="40px"
                              height="40px"
                              backgroundColor="surface.background.gray.subtle"
                              borderWidth={
                                key as
                                  | 'none'
                                  | 'thinner'
                                  | 'thin'
                                  | 'thick'
                                  | 'thicker'
                              }
                              borderColor="surface.border.gray.normal"
                            />
                          )}
                        </Box>
                      ),
                    )}
                  </Box>
                </Box>
              </CardBody>
            </Card>

            {/* Elevation Tokens Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Elevation Tokens (Web only)" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  Elevation tokens for box-shadow CSS values. Available for both
                  light and dark modes.
                </Text>

                {/* Light Mode Elevation */}
                <Box marginBottom="spacing.5">
                  <Box display="flex" flexDirection="column" gap="spacing.6">
                    {(
                      Object.entries(Elevation.onLight) as [
                        ElevationLevels,
                        string,
                      ][]
                    ).map(([key, value]) => (
                      <Box
                        key={key}
                        display="flex"
                        alignItems="center"
                        gap="spacing.4"
                      >
                        <Box minWidth="120px">
                          <Text weight="semibold">{key}:</Text>
                        </Box>
                        <Box
                          backgroundColor="surface.background.gray.moderate"
                          paddingX="spacing.3"
                          paddingY="spacing.2"
                          borderRadius="small"
                          flex="1"
                        >
                          <Code size="small">{value}</Code>
                        </Box>
                        {key !== 'none' && (
                          <Box
                            as="div"
                            width="80px"
                            height="80px"
                            backgroundColor="surface.background.gray.subtle"
                            borderRadius="medium"
                            elevation={key}
                          />
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </TabPanel>

        {/* Components Tab Panel */}
        <TabPanel value="components">
          <Box paddingTop="spacing.6">
            {/* UI Components Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="UI Components" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  All components are re-exported from @workindia/dsm and
                  configured with WorkIndia theme.
                </Text>

                {/* Buttons */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Buttons
                  </Heading>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.3"
                    flexWrap="wrap"
                    alignItems="flex-start"
                  >
                    <Button variant="primary" size="medium">
                      Primary
                    </Button>
                    <Button variant="secondary" size="medium">
                      Secondary
                    </Button>
                    <Button variant="tertiary" size="medium">
                      Tertiary
                    </Button>
                    <Button variant="primary" size="small">
                      Small
                    </Button>
                    <Button variant="primary" size="large">
                      Large
                    </Button>
                  </Box>
                </Box>

                {/* Badges */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Badges
                  </Heading>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.3"
                    flexWrap="wrap"
                  >
                    <Badge color="positive">Success</Badge>
                    <Badge color="negative">Error</Badge>
                    <Badge color="notice">Notice</Badge>
                    <Badge color="information">Info</Badge>
                    <Badge color="neutral">Neutral</Badge>
                  </Box>
                </Box>

                {/* Alerts */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Alerts
                  </Heading>
                  <Box display="flex" flexDirection="column" gap="spacing.3">
                    <Alert
                      color="information"
                      description="This is an informational alert message."
                    />
                    <Alert
                      color="positive"
                      description="This is a success alert message."
                    />
                    <Alert
                      color="negative"
                      description="This is an error alert message."
                    />
                    <Alert
                      color="notice"
                      description="This is a warning alert message."
                    />
                  </Box>
                </Box>

                {/* Form Components */}
                <Box marginBottom="spacing.5">
                  <Heading size="medium" marginBottom="spacing.3">
                    Form Components
                  </Heading>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap="spacing.4"
                    maxWidth="400px"
                  >
                    <TextInput
                      label="Text Input"
                      placeholder="Enter text here"
                      value={textInputValue}
                      onChange={({ value }: { value?: string }) => {
                        setTextInputValue(value ?? '');
                      }}
                    />

                    <Dropdown selectionType="single">
                      <SelectInput
                        label="Select Input"
                        placeholder="Select an option"
                        value={
                          selectValue.length > 0 ? selectValue[0] : undefined
                        }
                        onChange={({ values }: { values: string[] }) => {
                          setSelectValue(values);
                        }}
                      />
                      <DropdownOverlay>
                        <ActionList>
                          <ActionListItem
                            title="Option 1"
                            value="option1"
                            onClick={() => {
                              setSelectValue(['option1']);
                            }}
                          />
                          <ActionListItem
                            title="Option 2"
                            value="option2"
                            onClick={() => {
                              setSelectValue(['option2']);
                            }}
                          />
                          <ActionListItem
                            title="Option 3"
                            value="option3"
                            onClick={() => {
                              setSelectValue(['option3']);
                            }}
                          />
                        </ActionList>
                      </DropdownOverlay>
                    </Dropdown>

                    <Checkbox
                      isChecked={checkboxChecked}
                      onChange={({ isChecked }: { isChecked: boolean }) => {
                        setCheckboxChecked(isChecked);
                      }}
                    >
                      Checkbox Option
                    </Checkbox>

                    <RadioGroup
                      label="Radio Options"
                      value={radioValue}
                      onChange={({ value }: { value?: string }) => {
                        if (value) {
                          setRadioValue(value);
                        }
                      }}
                    >
                      <Radio value="option1">Radio Option 1</Radio>
                      <Radio value="option2">Radio Option 2</Radio>
                    </RadioGroup>

                    <Box display="flex" alignItems="center" gap="spacing.2">
                      <Text>Toggle Switch</Text>
                      <Switch
                        accessibilityLabel="Toggle Switch"
                        isChecked={switchChecked}
                        onChange={({ isChecked }: { isChecked: boolean }) => {
                          setSwitchChecked(isChecked);
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                {/* Spinner */}
                <Box>
                  <Heading size="medium" marginBottom="spacing.3">
                    Spinner
                  </Heading>
                  <Box
                    display="flex"
                    flexDirection="row"
                    gap="spacing.4"
                    alignItems="center"
                  >
                    <Spinner
                      size="medium"
                      label="Loading..."
                      accessibilityLabel="Loading content"
                    />
                    <Spinner
                      size="large"
                      label="Loading..."
                      accessibilityLabel="Loading content"
                    />
                    <Spinner
                      size="xlarge"
                      label="Loading..."
                      accessibilityLabel="Loading content"
                    />
                  </Box>
                </Box>
              </CardBody>
            </Card>

            {/* Usage Example */}
            <Card>
              <CardHeader>
                <CardHeaderLeading title="Usage Example" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.3">
                  All components and tokens are imported from @workindia/dsm and
                  @workindia/tokens packages. Direct imports from
                  @razorpay/blade are blocked by ESLint rules.
                </Text>
                <Box
                  padding="spacing.4"
                  backgroundColor="surface.background.gray.subtle"
                  borderRadius="small"
                >
                  <Text size="small">
                    {`import { WorkIndiaProvider, Button, Heading } from '@workindia/dsm';
import { Colors } from '@workindia/tokens';`}
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </TabPanel>

        {/* Icons Tab Panel */}
        <TabPanel value="icons">
          <Box paddingTop="spacing.6">
            <Card>
              <CardHeader>
                <CardHeaderLeading title="Icon Library" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  All available icons from @workindia/icons package. Click on an
                  icon to copy its name.
                </Text>

                {/* Icons Grid */}
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    base: 'repeat(2, 1fr)',
                    s: 'repeat(3, 1fr)',
                    m: 'repeat(4, 1fr)',
                    l: 'repeat(5, 1fr)',
                  }}
                  gap="spacing.4"
                >
                  {getAllIcons().map(({ name, Icon }) => (
                    <div
                      key={name}
                      onClick={() => {
                        void navigator.clipboard.writeText(name);
                      }}
                      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          void navigator.clipboard.writeText(name);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      title={`Click to copy: ${name}`}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        color: Colors.neutral.light[900],
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.backgroundColor =
                          Colors.neutral.light[100];
                        e.currentTarget.style.borderColor =
                          Colors.neutral.light[400];
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                        e.currentTarget.style.backgroundColor =
                          Colors.neutral.light[50];
                        e.currentTarget.style.borderColor =
                          Colors.neutral.light[300];
                      }}
                    >
                      <Box
                        padding="spacing.4"
                        borderRadius="medium"
                        borderWidth="thin"
                        borderColor="surface.border.gray.subtle"
                        backgroundColor="surface.background.gray.subtle"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        gap="spacing.2"
                      >
                        <Icon size="large" color="currentColor" />
                        <Text
                          size="small"
                          color="surface.text.gray.subtle"
                          textAlign="center"
                        >
                          {name.replace('Icon', '')}
                        </Text>
                      </Box>
                    </div>
                  ))}
                </Box>

                <Box
                  marginTop="spacing.6"
                  paddingTop="spacing.4"
                  borderTopWidth="thin"
                  borderTopColor="surface.border.gray.subtle"
                >
                  <Text size="small" color="surface.text.gray.muted">
                    Total icons: {getAllIcons().length}
                  </Text>
                </Box>
              </CardBody>
            </Card>

            {/* Logo Section */}
            <Card marginBottom="spacing.6">
              <CardHeader>
                <CardHeaderLeading title="Logo & Wordmark" />
              </CardHeader>
              <CardBody>
                <Text marginBottom="spacing.4">
                  WorkIndia brand logo and wordmark icons. Use the appropriate
                  variant based on your background color.
                </Text>

                {/* Logo Icons */}
                <Box marginBottom="spacing.6">
                  <Heading size="medium" marginBottom="spacing.4">
                    Logo (24×24)
                  </Heading>
                  <Box
                    display="grid"
                    gridTemplateColumns={{
                      base: 'repeat(1, 1fr)',
                      s: 'repeat(2, 1fr)',
                    }}
                    gap="spacing.4"
                  >
                    {/* Logo on Light Background */}
                    <Box
                      padding="spacing.6"
                      borderRadius="medium"
                      borderWidth="thin"
                      borderColor="surface.border.gray.subtle"
                      backgroundColor="surface.background.gray.subtle"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="spacing.3"
                    >
                      <Box
                        padding="spacing.4"
                        borderRadius="small"
                        backgroundColor="surface.background.gray.subtle"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icons.WorkIndiaLogoOnLightIcon size="2xlarge" />
                      </Box>
                      <Text size="small" color="surface.text.gray.subtle">
                        WorkIndiaLogoOnLightIcon
                      </Text>
                      <Text size="xsmall" color="surface.text.gray.muted">
                        For light backgrounds
                      </Text>
                    </Box>

                    {/* Logo on Dark Background */}
                    <Box
                      padding="spacing.6"
                      borderRadius="medium"
                      borderWidth="thin"
                      borderColor="surface.border.gray.subtle"
                      backgroundColor="overlay.background.subtle"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="spacing.3"
                    >
                      <Box
                        padding="spacing.4"
                        borderRadius="small"
                        backgroundColor="transparent"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icons.WorkIndiaLogoOnDarkIcon size="2xlarge" />
                      </Box>
                      <Text
                        size="small"
                        color="surface.text.staticWhite.subtle"
                      >
                        WorkIndiaLogoOnDarkIcon
                      </Text>
                      <Text
                        size="xsmall"
                        color="surface.text.staticWhite.muted"
                      >
                        For dark backgrounds
                      </Text>
                    </Box>
                  </Box>
                </Box>

                {/* Wordmark Icons */}
                <Box>
                  <Heading size="medium" marginBottom="spacing.4">
                    Wordmark (172×25)
                  </Heading>
                  <Box
                    display="grid"
                    gridTemplateColumns={{
                      base: 'repeat(1, 1fr)',
                      s: 'repeat(2, 1fr)',
                    }}
                    gap="spacing.4"
                  >
                    {/* Wordmark on Light Background */}
                    <Box
                      padding="spacing.6"
                      borderRadius="medium"
                      borderWidth="thin"
                      borderColor="surface.border.gray.subtle"
                      backgroundColor="surface.background.gray.subtle"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="spacing.3"
                    >
                      <Box
                        padding="spacing.4"
                        borderRadius="small"
                        backgroundColor="surface.background.gray.subtle"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                      >
                        <Icons.WorkIndiaWordmarkOnLightIcon
                          size="2xlarge"
                          testID="workindia-wordmark-on-light-icon"
                        />
                      </Box>
                      <Text size="small" color="surface.text.gray.subtle">
                        WorkIndiaWordmarkOnLightIcon
                      </Text>
                      <Text size="xsmall" color="surface.text.gray.muted">
                        For light backgrounds
                      </Text>
                    </Box>

                    {/* Wordmark on Dark Background */}
                    <Box
                      padding="spacing.6"
                      borderRadius="medium"
                      borderWidth="thin"
                      borderColor="surface.border.gray.subtle"
                      backgroundColor="overlay.background.subtle"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      gap="spacing.3"
                    >
                      <Box
                        padding="spacing.4"
                        borderRadius="small"
                        backgroundColor="transparent"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                      >
                        <Icons.WorkIndiaWordmarkOnDarkIcon
                          size="2xlarge"
                          testID="workindia-wordmark-on-dark-icon"
                        />
                      </Box>
                      <Text
                        size="small"
                        color="surface.text.staticWhite.subtle"
                      >
                        WorkIndiaWordmarkOnDarkIcon
                      </Text>
                      <Text
                        size="xsmall"
                        color="surface.text.staticWhite.muted"
                      >
                        For dark backgrounds
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </TabPanel>
      </Tabs>
    </Box>
  );
};

/**
 * Example App component showcasing locked-down tokens and UI components
 * Note: We only import from @workindia/dsm, never from @razorpay/blade directly
 * @returns The App component
 */
export const App = () => {
  return (
    <WorkIndiaProvider colorScheme="light">
      <AppContent />
    </WorkIndiaProvider>
  );
};
