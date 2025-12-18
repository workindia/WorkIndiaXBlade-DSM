/**
 * SearchInputWithAdd - Custom SearchInput component with "Add New" functionality
 *
 * This component extends the standard SearchInput from Blade to provide an option
 * to add new items when no search results are found.
 */

import React, { useState } from 'react';
import type { ReactElement } from 'react';
import {
  SearchInput,
  Dropdown,
  DropdownOverlay,
  ActionList,
  ActionListItem,
  Box,
  Text,
} from '@razorpay/blade/components';
import type { SearchInputProps } from '@razorpay/blade/components';

interface SearchInputWithAddBaseProps {
  /**
   * Array of items to search through. Each item should have at least a 'title' field.
   */
  items: {
    id: string;
    title: string;
    [key: string]: unknown;
  }[];

  /**
   * Callback function when an existing item is selected
   */
  onItemSelect?: (item: {
    id: string;
    title: string;
    [key: string]: unknown;
  }) => void;

  /**
   * Callback function when a new item is added (when user selects "+ Add ..." option)
   */
  onAddNewItem?: (searchTerm: string) => void;

  /**
   * Custom text for the "Add" button. Use {searchTerm} as placeholder for the search term.
   * @default "+ Add \"{searchTerm}\""
   * @example
   * ```tsx
   * addNewItemText="+ Create \"{searchTerm}\""
   * addNewItemText="+ Add new tag: {searchTerm}"
   * ```
   */
  addNewItemText?: string;

  /**
   * Whether to show the "Add New" option when no results are found
   * @default true
   */
  showAddNewOption?: boolean;

  /**
   * Custom filter function to filter items based on search term
   * If not provided, default case-insensitive title search is used
   */
  filterFn?: (
    item: { id: string; title: string; [key: string]: unknown },
    searchTerm: string,
  ) => boolean;

  /**
   * Render prop to customize how each item is displayed in the dropdown
   * If not provided, default rendering with item.title is used
   */
  renderItem?: (item: {
    id: string;
    title: string;
    [key: string]: unknown;
  }) => React.ReactNode;

  /**
   * Whether the dropdown should be in loading state
   * @default false
   */
  isDropdownLoading?: boolean;

  /**
   * Custom message to show when no results are found and showAddNewOption is false
   * @default "No results found for \"{searchTerm}\""
   */
  noResultsText?: string;

  /**
   * Test identifier for testing purposes
   */
  testID?: string;

  /**
   * Selection type for the dropdown
   * @default "single"
   */
  selectionType?: 'single' | 'multiple';
}

type SearchInputWithAddPropsWithLabel = SearchInputWithAddBaseProps &
  Omit<SearchInputProps, 'trailing'> & {
    label: string;
    accessibilityLabel?: string;
  };

type SearchInputWithAddPropsWithA11yLabel = SearchInputWithAddBaseProps &
  Omit<SearchInputProps, 'trailing'> & {
    label?: undefined;
    accessibilityLabel: string;
  };

export type SearchInputWithAddProps =
  | SearchInputWithAddPropsWithLabel
  | SearchInputWithAddPropsWithA11yLabel;

const _SearchInputWithAdd: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputWithAddProps
> = (
  {
    items,
    onItemSelect,
    onAddNewItem,
    addNewItemText = '+ Add "{searchTerm}"',
    showAddNewOption = true,
    filterFn,
    renderItem,
    isDropdownLoading = false,
    noResultsText = 'No results found for "{searchTerm}"',
    testID,
    selectionType = 'single',
    value: controlledValue,
    onChange: controlledOnChange,
    ...searchInputProps
  },
  ref,
): ReactElement => {
  const [searchTerm, setSearchTerm] = useState(controlledValue ?? '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Use controlled value if provided, otherwise use internal state
  const currentSearchTerm = controlledValue ?? searchTerm;

  // Default filter function: case-insensitive search on title
  const defaultFilterFn = (
    item: { id: string; title: string; [key: string]: unknown },
    term: string,
  ): boolean => {
    return item.title.toLowerCase().includes(term.toLowerCase());
  };

  const activeFilterFn = filterFn ?? defaultFilterFn;

  // Filter items based on search term
  const filteredItems = currentSearchTerm
    ? items.filter((item) => activeFilterFn(item, currentSearchTerm))
    : items;

  const hasResults = filteredItems.length > 0;
  const shouldShowAddOption =
    !hasResults && currentSearchTerm.trim() !== '' && showAddNewOption;

  // Format the add new item text by replacing {searchTerm} placeholder
  const formattedAddText = addNewItemText.replace(
    '{searchTerm}',
    currentSearchTerm,
  );

  const handleSearchChange = ({
    name,
    value,
  }: {
    name?: string;
    value?: string;
  }): void => {
    const newValue = value ?? '';

    // Update internal state if not controlled
    if (controlledValue === undefined) {
      setSearchTerm(newValue);
    }

    // Always call the controlled onChange if provided
    if (controlledOnChange) {
      controlledOnChange({ name, value: newValue });
    }

    // Open dropdown when user types
    if (newValue.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleItemSelect = (item: {
    id: string;
    title: string;
    [key: string]: unknown;
  }): void => {
    if (onItemSelect) {
      onItemSelect(item);
    }
    setIsDropdownOpen(false);

    // Update search term to selected item's title if not controlled
    if (controlledValue === undefined) {
      setSearchTerm(item.title);
    }
  };

  const handleAddNewItem = (): void => {
    if (onAddNewItem) {
      onAddNewItem(currentSearchTerm);
    }
    setIsDropdownOpen(false);

    // Clear search term after adding if not controlled
    if (controlledValue === undefined) {
      setSearchTerm('');
    }
  };

  const handleClearButtonClick = (): void => {
    setSearchTerm('');
    setIsDropdownOpen(false);
    if (searchInputProps.onClearButtonClick) {
      searchInputProps.onClearButtonClick();
    }
  };

  return (
    <Box>
      <Dropdown
        selectionType={selectionType}
        isOpen={isDropdownOpen}
        onOpenChange={(open) => {
          setIsDropdownOpen(open);
        }}
      >
        <SearchInput
          ref={ref}
          {...searchInputProps}
          testID={testID}
          value={currentSearchTerm}
          onChange={handleSearchChange}
          onClearButtonClick={handleClearButtonClick}
        />

        <DropdownOverlay>
          {isDropdownLoading ? (
            <Box padding="spacing.5" display="flex" justifyContent="center">
              <Text>Loading...</Text>
            </Box>
          ) : hasResults ? (
            <ActionList>
              {filteredItems.map((item) => {
                const renderedTitle = renderItem
                  ? renderItem(item)
                  : item.title;
                return (
                  <ActionListItem
                    key={item.id}
                    title={
                      typeof renderedTitle === 'string'
                        ? renderedTitle
                        : // eslint-disable-next-line @typescript-eslint/no-base-to-string
                          String(renderedTitle)
                    }
                    value={item.id}
                    onClick={() => {
                      handleItemSelect(item);
                    }}
                  />
                );
              })}
            </ActionList>
          ) : shouldShowAddOption ? (
            <ActionList>
              {[
                <ActionListItem
                  key="add-new-item"
                  title={formattedAddText}
                  value="add-new-item"
                  onClick={handleAddNewItem}
                />,
              ]}
            </ActionList>
          ) : (
            <Box padding="spacing.5">
              <Text color="surface.text.gray.subtle" textAlign="center">
                {noResultsText.replace('{searchTerm}', currentSearchTerm)}
              </Text>
            </Box>
          )}
        </DropdownOverlay>
      </Dropdown>
    </Box>
  );
};

export const SearchInputWithAdd = React.forwardRef(_SearchInputWithAdd);

SearchInputWithAdd.displayName = 'SearchInputWithAdd';
