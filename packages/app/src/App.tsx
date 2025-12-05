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
 * Example App component showcasing locked-down tokens and UI components
 * Note: We only import from @workindia/dsm, never from @razorpay/blade directly
 * @returns The App component
 */
export const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('tokens');

  return (
    <WorkIndiaProvider colorScheme="light">
      <Box padding="spacing.5" maxWidth="1200px" margin="auto">
        {/* Header */}
        <Box marginBottom="spacing.8">
          <Heading size="2xlarge">WorkIndia Design System</Heading>
          <Text marginTop="spacing.2" color="surface.text.gray.subtle">
            A locked-down design system built on @razorpay/blade with restricted
            tokens
          </Text>
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
                    All colors are locked down to ensure design consistency.
                    Each color provides a full gradient scale.
                  </Text>

                  {/* Chromatic Colors */}
                  <Box marginBottom="spacing.5">
                    <Heading size="medium" marginBottom="spacing.3">
                      Chromatic Colors
                    </Heading>
                    <Text
                      marginBottom="spacing.4"
                      color="surface.text.gray.subtle"
                    >
                      All chromatic colors include shades from 50-1000 and alpha
                      variants (a50, a100, a150, a200, a400).
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row"
                      gap="spacing.4"
                      flexWrap="wrap"
                    >
                      {/* Brand */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Brand
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
                          {Object.entries(Colors.chromatic.brand).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Rose */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Rose
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
                          {Object.entries(Colors.chromatic.rose).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Cerulean */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Cerulean
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
                          {Object.entries(Colors.chromatic.cerulean).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Emerald */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Emerald
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
                          {Object.entries(Colors.chromatic.emerald).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Crimson */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Crimson
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
                          {Object.entries(Colors.chromatic.crimson).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Amber */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Amber
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
                          {Object.entries(Colors.chromatic.amber).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Sky */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Sky
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
                          {Object.entries(Colors.chromatic.sky).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Neutral Colors */}
                  <Box>
                    <Heading size="medium" marginBottom="spacing.3">
                      Neutral Colors
                    </Heading>
                    <Text
                      marginBottom="spacing.4"
                      color="surface.text.gray.subtle"
                    >
                      Neutral colors include light and dark scales with shades
                      from 0-1300 and alpha variants (a25, a50, a100, a200,
                      a400).
                    </Text>
                    <Box
                      display="flex"
                      flexDirection="row"
                      gap="spacing.4"
                      flexWrap="wrap"
                      alignItems="flex-start"
                    >
                      {/* Neutral Light */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Neutral Light
                        </Text>
                        <Box
                          display="flex"
                          flexDirection="column"
                          gap="spacing.1"
                          borderRadius="small"
                          overflow="hidden"
                          borderWidth="thin"
                          borderColor="surface.border.gray.subtle"
                          minHeight="600px"
                          overflowY="auto"
                        >
                          {Object.entries(Colors.neutral.light).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Neutral Dark */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Neutral Dark
                        </Text>
                        <Box
                          display="flex"
                          flexDirection="column"
                          gap="spacing.1"
                          borderRadius="small"
                          overflow="hidden"
                          borderWidth="thin"
                          borderColor="surface.border.gray.subtle"
                          minHeight="600px"
                          overflowY="auto"
                        >
                          {Object.entries(Colors.neutral.dark).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={shade}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    {shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </Box>

                      {/* Black & White */}
                      <Box>
                        <Text weight="semibold" marginBottom="spacing.2">
                          Black & White
                        </Text>
                        <Text
                          marginBottom="spacing.4"
                          color="surface.text.gray.subtle"
                        >
                          Black and white colors with transparency shades
                          (10-500).
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
                          {Object.entries(Colors.neutral.blackNWhite.black).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={`black-${shade}`}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    black-{shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
                          {Object.entries(Colors.neutral.blackNWhite.white).map(
                            ([shade, color]: [string, string]) => {
                              const textColor = getContrastColor(color);
                              return (
                                <div
                                  key={`white-${shade}`}
                                  style={{
                                    backgroundColor: color,
                                    color: textColor,
                                    padding: '8px',
                                    minWidth: '140px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Text size="small" color="currentColor">
                                    white-{shade}
                                  </Text>
                                  <Text size="small" color="currentColor">
                                    {color}
                                  </Text>
                                </div>
                              );
                            },
                          )}
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
                    Border radius and width tokens for consistent border
                    styling.
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
                    Elevation tokens for box-shadow CSS values. Available for
                    both light and dark modes.
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
                    All components and tokens are imported from @workindia/dsm
                    and @workindia/tokens packages. Direct imports from
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
                    All available icons from @workindia/icons package. Click on
                    an icon to copy its name.
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
            </Box>
          </TabPanel>
        </Tabs>
      </Box>
    </WorkIndiaProvider>
  );
};
