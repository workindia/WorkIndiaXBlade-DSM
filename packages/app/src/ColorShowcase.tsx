/**
 * Color Showcase Component
 * Displays all available color tokens from workIndiaTheme organized by dot notation paths
 */

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardHeaderLeading,
  Heading,
  Text,
} from '@workindia/dsm';
import { Colors } from '@workindia/tokens';
import { workIndiaTheme } from '@workindia/dsm';

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
 * Recursively extract all color paths from a color object
 * @param obj - The color object to traverse
 * @param prefix - The current path prefix
 * @returns Array of color paths with their values
 */
const extractColorPaths = (
  obj: unknown,
  prefix = '',
): { path: string; value: string }[] => {
  const paths: { path: string; value: string }[] = [];

  if (typeof obj === 'string') {
    if (
      obj.startsWith('#') ||
      obj.startsWith('rgba') ||
      obj.startsWith('hsla')
    ) {
      // It's a color string
      paths.push({ path: prefix, value: obj });
    }
  } else if (typeof obj === 'object' && obj !== null) {
    // Recursively traverse the object
    Object.keys(obj).forEach((key) => {
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      const value = (obj as Record<string, unknown>)[key];
      paths.push(...extractColorPaths(value, newPrefix));
    });
  }

  return paths;
};

/**
 * Group color paths by their common prefix segments
 * @param paths - Array of color paths
 * @returns Grouped object with nested structure
 */
const groupColorPaths = (
  paths: { path: string; value: string }[],
): Record<string, { path: string; value: string }[]> => {
  const groups: Record<string, { path: string; value: string }[]> = {};

  paths.forEach(({ path, value }) => {
    // Extract the base path (everything before the last segment)
    const segments = path.split('.');
    if (segments.length > 1) {
      // Group by all segments except the last one
      const groupKey = segments.slice(0, -1).join('.');
      groups[groupKey] = groups[groupKey] ?? [];
      groups[groupKey].push({ path, value });
    } else {
      // Top-level colors
      groups[''] = groups[''] ?? [];
      groups[''].push({ path, value });
    }
  });

  return groups;
};

/**
 * Color Showcase Component
 * Displays all color tokens from workIndiaTheme organized by category and mode
 */
export const ColorShowcase = () => {
  return (
    <Box paddingTop="spacing.6">
      <Card marginBottom="spacing.6">
        <CardHeader>
          <CardHeaderLeading title="All Color Tokens" />
        </CardHeader>
        <CardBody>
          <Text marginBottom="spacing.4">
            Complete showcase of all color paths available in workIndiaTheme.
            Colors are organized by category and mode (onLight/onDark), grouped
            by dot notation paths for easy navigation.
          </Text>

          {/* WorkIndia Theme Colors - Comprehensive Showcase */}
          <Box marginBottom="spacing.8">
            <Heading size="large" marginBottom="spacing.4">
              All WorkIndia Theme Colors
            </Heading>
            <Text marginBottom="spacing.4" color="surface.text.gray.subtle">
              WorkIndia theme includes all colors from Blade theme (as base)
              with WorkIndia-specific overrides. This shows all available color
              paths.
            </Text>

            {/* OnLight Colors */}
            <Box marginBottom="spacing.6">
              <Heading size="medium" marginBottom="spacing.3">
                On Light Mode
              </Heading>
              {Object.keys(workIndiaTheme.colors.onLight).map((category) => {
                const categoryColors =
                  workIndiaTheme.colors.onLight[
                    category as keyof typeof workIndiaTheme.colors.onLight
                  ];
                const colorPaths = extractColorPaths(
                  categoryColors,
                  `onLight.${category}`,
                );

                if (colorPaths.length === 0) return null;

                // Group colors by their path structure
                const groupedPaths = groupColorPaths(colorPaths);
                const sortedGroups = Object.keys(groupedPaths).sort();

                return (
                  <Box key={category} marginBottom="spacing.6">
                    <Heading size="small" marginBottom="spacing.4">
                      {category}
                    </Heading>
                    {sortedGroups.map((groupKey) => {
                      const groupColors = groupedPaths[groupKey];
                      const fullPath = groupKey
                        ? `onLight.${category}.${groupKey}`
                        : `onLight.${category}`;

                      return (
                        <Box
                          key={groupKey}
                          marginBottom="spacing.5"
                          paddingLeft="spacing.4"
                          borderLeftWidth="thick"
                          borderLeftColor="surface.border.gray.subtle"
                        >
                          <Text
                            weight="semibold"
                            size="small"
                            marginBottom="spacing.3"
                            color="surface.text.gray.normal"
                          >
                            {fullPath}
                          </Text>
                          <Box
                            display="grid"
                            gridTemplateColumns={{
                              base: 'repeat(1, 1fr)',
                              s: 'repeat(2, 1fr)',
                              m: 'repeat(3, 1fr)',
                              l: 'repeat(4, 1fr)',
                            }}
                            gap="spacing.3"
                          >
                            {groupColors.map(({ path, value }) => {
                              const textColor = getContrastColor(value);
                              // Extract just the last segment for display
                              const pathSegments = path.split('.');
                              const displayPath =
                                pathSegments[pathSegments.length - 1] ?? path;

                              return (
                                <Box
                                  key={path}
                                  borderRadius="small"
                                  overflow="hidden"
                                  borderWidth="thin"
                                  borderColor="surface.border.gray.subtle"
                                >
                                  <div
                                    style={{
                                      backgroundColor: value,
                                      color: textColor,
                                      padding: '12px',
                                      minHeight: '80px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between',
                                    }}
                                    title={path}
                                  >
                                    <Text
                                      size="xsmall"
                                      weight="semibold"
                                      color="currentColor"
                                    >
                                      {displayPath}
                                    </Text>
                                    <Text size="xsmall" color="currentColor">
                                      {value}
                                    </Text>
                                    <span
                                      style={{
                                        fontSize: '10px',
                                        opacity: 0.8,
                                        color: textColor,
                                      }}
                                    >
                                      {path}
                                    </span>
                                  </div>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>

            {/* OnDark Colors */}
            <Box marginBottom="spacing.6">
              <Heading size="medium" marginBottom="spacing.3">
                On Dark Mode
              </Heading>
              {Object.keys(workIndiaTheme.colors.onDark).map((category) => {
                const categoryColors =
                  workIndiaTheme.colors.onDark[
                    category as keyof typeof workIndiaTheme.colors.onDark
                  ];
                const colorPaths = extractColorPaths(
                  categoryColors,
                  `onDark.${category}`,
                );

                if (colorPaths.length === 0) return null;

                // Group colors by their path structure
                const groupedPaths = groupColorPaths(colorPaths);
                const sortedGroups = Object.keys(groupedPaths).sort();

                return (
                  <Box key={category} marginBottom="spacing.6">
                    <Heading size="small" marginBottom="spacing.4">
                      {category}
                    </Heading>
                    {sortedGroups.map((groupKey) => {
                      const groupColors = groupedPaths[groupKey];
                      const fullPath = groupKey
                        ? `onDark.${category}.${groupKey}`
                        : `onDark.${category}`;

                      return (
                        <Box
                          key={groupKey}
                          marginBottom="spacing.5"
                          paddingLeft="spacing.4"
                          borderLeftWidth="thick"
                          borderLeftColor="surface.border.gray.subtle"
                        >
                          <Text
                            weight="semibold"
                            size="small"
                            marginBottom="spacing.3"
                            color="surface.text.gray.normal"
                          >
                            {fullPath}
                          </Text>
                          <Box
                            display="grid"
                            gridTemplateColumns={{
                              base: 'repeat(1, 1fr)',
                              s: 'repeat(2, 1fr)',
                              m: 'repeat(3, 1fr)',
                              l: 'repeat(4, 1fr)',
                            }}
                            gap="spacing.3"
                          >
                            {groupColors.map(({ path, value }) => {
                              const textColor = getContrastColor(value);
                              // Extract just the last segment for display
                              const pathSegments = path.split('.');
                              const displayPath =
                                pathSegments[pathSegments.length - 1] ?? path;

                              return (
                                <Box
                                  key={path}
                                  borderRadius="small"
                                  overflow="hidden"
                                  borderWidth="thin"
                                  borderColor="surface.border.gray.subtle"
                                >
                                  <div
                                    style={{
                                      backgroundColor: value,
                                      color: textColor,
                                      padding: '12px',
                                      minHeight: '80px',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      justifyContent: 'space-between',
                                    }}
                                    title={path}
                                  >
                                    <Text
                                      size="xsmall"
                                      weight="semibold"
                                      color="currentColor"
                                    >
                                      {displayPath}
                                    </Text>
                                    <Text size="xsmall" color="currentColor">
                                      {value}
                                    </Text>
                                    <span
                                      style={{
                                        fontSize: '10px',
                                        opacity: 0.8,
                                        color: textColor,
                                      }}
                                    >
                                      {path}
                                    </span>
                                  </div>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                );
              })}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
