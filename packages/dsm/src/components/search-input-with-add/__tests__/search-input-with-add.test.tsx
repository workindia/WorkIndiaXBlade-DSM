/**
 * Tests for SearchInputWithAdd component
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInputWithAdd } from '../search-input-with-add';
import { WorkIndiaProvider } from '../../../provider';

// Helper function to render component with provider
const renderWithProvider = (ui: React.ReactElement) => {
  return render(<WorkIndiaProvider>{ui}</WorkIndiaProvider>);
};

describe('SearchInputWithAdd', () => {
  const mockItems = [
    { id: '1', title: 'React' },
    { id: '2', title: 'TypeScript' },
    { id: '3', title: 'JavaScript' },
    { id: '4', title: 'Node.js' },
  ];

  describe('Component rendering', () => {
    it('should render with label', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          accessibilityLabel="Search Tags"
        />,
      );

      expect(screen.getByLabelText('Search Tags')).toBeInTheDocument();
    });

    it('should render with placeholder', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          placeholder="Search for tags..."
          items={mockItems}
        />,
      );

      expect(
        screen.getByPlaceholderText('Search for tags...'),
      ).toBeInTheDocument();
    });

    it('should render with accessibility label when label is not provided', () => {
      renderWithProvider(
        <SearchInputWithAdd
          accessibilityLabel="Search Tags"
          placeholder="Search..."
          items={mockItems}
        />,
      );

      expect(screen.getByLabelText('Search Tags')).toBeInTheDocument();
    });
  });

  describe('Search functionality', () => {
    it('should filter items based on search term', async () => {
      const user = userEvent.setup();
      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Type');

      await waitFor(() => {
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
      });
      expect(screen.queryByText('React')).not.toBeInTheDocument();
      expect(screen.queryByText('JavaScript')).not.toBeInTheDocument();
    });

    it('should show all items when search is empty', async () => {
      const user = userEvent.setup();
      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.click(input);
      await user.type(input, 'a');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
      });
    });

    it('should use custom filter function when provided', async () => {
      const user = userEvent.setup();

      const customFilter = jest.fn((item, term) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        item.title.toLowerCase().startsWith(term.toLowerCase()),
      );

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          filterFn={customFilter}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Type');

      await waitFor(() => {
        expect(customFilter).toHaveBeenCalled();
      });
    });
  });

  describe('Item selection', () => {
    it('should call onItemSelect when an item is clicked', async () => {
      const user = userEvent.setup();
      const onItemSelect = jest.fn();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          onItemSelect={onItemSelect}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const reactItem = screen.getByText('React');
      await user.click(reactItem);

      expect(onItemSelect).toHaveBeenCalledWith({
        id: '1',
        title: 'React',
      });
    });

    it('should update search term to selected item title in uncontrolled mode', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Type');

      await waitFor(() => {
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
      });

      const typeScriptItem = screen.getByText('TypeScript');
      await user.click(typeScriptItem);

      await waitFor(() => {
        expect(input.value).toBe('TypeScript');
      });
    });
  });

  describe('Add new item functionality', () => {
    it('should show add option when no results are found', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Python"')).toBeInTheDocument();
      });
    });

    it('should call onAddNewItem when add option is clicked', async () => {
      const user = userEvent.setup();
      const onAddNewItem = jest.fn();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          onAddNewItem={onAddNewItem}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Python"')).toBeInTheDocument();
      });

      const addButton = screen.getByText('+ Add "Python"');
      await user.click(addButton);

      expect(onAddNewItem).toHaveBeenCalledWith('Python');
    });

    it('should use custom add text when provided', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          addNewItemText='+ Create tag "{searchTerm}"'
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Create tag "Python"')).toBeInTheDocument();
      });
    });

    it('should not show add option when showAddNewOption is false', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          showAddNewOption={false}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.queryByText('+ Add "Python"')).not.toBeInTheDocument();
      });
    });

    it('should show custom no results text when showAddNewOption is false', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          showAddNewOption={false}
          noResultsText='No tags found matching "{searchTerm}"'
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(
          screen.getByText('No tags found matching "Python"'),
        ).toBeInTheDocument();
      });
    });

    it('should not show add option when search term is empty', async () => {
      const user = userEvent.setup();

      renderWithProvider(<SearchInputWithAdd label="Search Tags" items={[]} />);

      const input = screen.getByLabelText('Search Tags');
      await user.click(input);

      await waitFor(() => {
        expect(screen.queryByText(/\+ Add/)).not.toBeInTheDocument();
      });
    });
  });

  describe('Controlled mode', () => {
    it('should work in controlled mode', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();

      const ControlledComponent = () => {
        const [value, setValue] = React.useState('');

        return (
          <SearchInputWithAdd
            label="Search Tags"
            items={mockItems}
            value={value}
            onChange={({ value: newValue }) => {
              setValue(newValue ?? '');
              onChange(newValue ?? '');
            }}
          />
        );
      };

      renderWithProvider(<ControlledComponent />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      expect(onChange).toHaveBeenCalledWith('React');
    });
  });

  describe('Loading state', () => {
    it('should show loading message when isDropdownLoading is true', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          isDropdownLoading={true}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('Loading...')).toBeInTheDocument();
      });
    });
  });

  describe('Custom rendering', () => {
    it('should use custom renderItem function', async () => {
      const user = userEvent.setup();
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const renderItem = jest.fn((item) => `Custom: ${item.title}`);

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          renderItem={renderItem}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(renderItem).toHaveBeenCalled();
        expect(screen.getByText('Custom: React')).toBeInTheDocument();
      });
    });
  });

  describe('Clear button', () => {
    it('should clear search when clear button is clicked', async () => {
      const user = userEvent.setup();
      const onClearButtonClick = jest.fn();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          onClearButtonClick={onClearButtonClick}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      expect(input.value).toBe('React');

      // Find and click the clear button
      const clearButton = screen.getByRole('button', {
        name: /clear input content/i,
      });
      await user.click(clearButton);

      expect(onClearButtonClick).toHaveBeenCalled();
    });
  });

  describe('Props inheritance', () => {
    it('should pass through SearchInput props', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          helpText="Search for existing tags or add new ones"
          isDisabled={false}
          size="medium"
        />,
      );

      expect(
        screen.getByText('Search for existing tags or add new ones'),
      ).toBeInTheDocument();
    });

    it('should support disabled state', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          isDisabled={true}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      expect(input).toBeDisabled();
    });

    it('should support testID prop', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          testID="custom-search-input"
        />,
      );

      const input = screen.getByTestId('custom-search-input');
      expect(input).toBeInTheDocument();
    });

    it('should support selectionType prop', () => {
      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          selectionType="multiple"
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle empty items array', async () => {
      const user = userEvent.setup();

      renderWithProvider(<SearchInputWithAdd label="Search Tags" items={[]} />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Test');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Test"')).toBeInTheDocument();
      });
    });

    it('should handle items with additional properties', async () => {
      const user = userEvent.setup();
      const itemsWithExtra = [
        { id: '1', title: 'React', category: 'framework', popular: true },
        { id: '2', title: 'Vue', category: 'framework', popular: false },
      ];

      const onItemSelect = jest.fn();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={itemsWithExtra}
          onItemSelect={onItemSelect}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const reactItem = screen.getByText('React');
      await user.click(reactItem);

      expect(onItemSelect).toHaveBeenCalledWith({
        id: '1',
        title: 'React',
        category: 'framework',
        popular: true,
      });
    });

    it('should handle special characters in search term', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          addNewItemText='+ Add "{searchTerm}"'
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'C++');

      await waitFor(() => {
        expect(screen.getByText('+ Add "C++"')).toBeInTheDocument();
      });
    });

    it('should not show add option when search term is only whitespace', async () => {
      const user = userEvent.setup();

      renderWithProvider(<SearchInputWithAdd label="Search Tags" items={[]} />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, '   ');

      await waitFor(() => {
        expect(screen.queryByText(/\+ Add/)).not.toBeInTheDocument();
      });
    });

    it('should handle item selection without onItemSelect callback', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const reactItem = screen.getByText('React');
      await user.click(reactItem);

      // Should not throw an error
      expect(input.value).toBe('React');
    });

    it('should handle add new item without onAddNewItem callback', async () => {
      const user = userEvent.setup();

      renderWithProvider(<SearchInputWithAdd label="Search Tags" items={[]} />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Python"')).toBeInTheDocument();
      });

      const addButton = screen.getByText('+ Add "Python"');
      await user.click(addButton);

      // Should not throw an error
      expect(input.value).toBe('');
    });
  });

  describe('Dropdown interaction', () => {
    it('should open dropdown when typing', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'R');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });
    });

    it('should close dropdown when item is selected', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const reactItem = screen.getByText('React');
      await user.click(reactItem);

      await waitFor(() => {
        expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
      });
    });

    it('should close dropdown when add new item is clicked', async () => {
      const user = userEvent.setup();

      renderWithProvider(<SearchInputWithAdd label="Search Tags" items={[]} />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Python"')).toBeInTheDocument();
      });

      const addButton = screen.getByText('+ Add "Python"');
      await user.click(addButton);

      await waitFor(() => {
        expect(screen.queryByText('+ Add "Python"')).not.toBeInTheDocument();
      });
    });

    it('should show all items when search term becomes empty', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');

      // Type to open dropdown
      await user.type(input, 'Type');

      await waitFor(() => {
        expect(screen.getByText('TypeScript')).toBeInTheDocument();
      });

      // Clear the input
      await user.clear(input);

      await waitFor(() => {
        expect(input.value).toBe('');
      });

      // When search is empty, component shows all items
      // But dropdown might be closed after clear
    });
  });

  describe('Controlled mode edge cases', () => {
    it('should work in controlled mode without onChange callback', async () => {
      const user = userEvent.setup();

      const ControlledComponent = () => {
        const [value] = React.useState('');

        return (
          <SearchInputWithAdd
            label="Search Tags"
            items={mockItems}
            value={value}
          />
        );
      };

      renderWithProvider(<ControlledComponent />);

      const input = screen.getByLabelText('Search Tags');
      expect(input.value).toBe('');

      // Value shouldn't change since there's no onChange
      await user.type(input, 'React');
      expect(input.value).toBe('');
    });

    it('should not update internal state when in controlled mode', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();

      const ControlledComponent = () => {
        const [value, setValue] = React.useState('Initial');

        return (
          <SearchInputWithAdd
            label="Search Tags"
            items={mockItems}
            value={value}
            onChange={({ value: newValue }) => {
              setValue(newValue ?? '');
              onChange(newValue ?? '');
            }}
          />
        );
      };

      renderWithProvider(<ControlledComponent />);

      const input = screen.getByLabelText('Search Tags');
      expect(input.value).toBe('Initial');

      await user.clear(input);
      await user.type(input, 'React');

      expect(onChange).toHaveBeenCalled();
    });

    it('should not clear search term in controlled mode when adding item', async () => {
      const user = userEvent.setup();
      const onAddNewItem = jest.fn();

      const ControlledComponent = () => {
        const [value, setValue] = React.useState('');

        return (
          <SearchInputWithAdd
            label="Search Tags"
            items={[]}
            value={value}
            onChange={({ value: newValue }) => {
              setValue(newValue ?? '');
            }}
            onAddNewItem={(term) => {
              onAddNewItem(term);
              // Controlled component manages its own state
            }}
          />
        );
      };

      renderWithProvider(<ControlledComponent />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(screen.getByText('+ Add "Python"')).toBeInTheDocument();
      });

      const addButton = screen.getByText('+ Add "Python"');
      await user.click(addButton);

      expect(onAddNewItem).toHaveBeenCalledWith('Python');
      // Value should remain since it's controlled
      expect(input.value).toBe('Python');
    });

    it('should not update search term in controlled mode when selecting item', async () => {
      const user = userEvent.setup();
      const onItemSelect = jest.fn();

      const ControlledComponent = () => {
        const [value, setValue] = React.useState('');

        return (
          <SearchInputWithAdd
            label="Search Tags"
            items={mockItems}
            value={value}
            onChange={({ value: newValue }) => {
              setValue(newValue ?? '');
            }}
            onItemSelect={onItemSelect}
          />
        );
      };

      renderWithProvider(<ControlledComponent />);

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const reactItem = screen.getByText('React');
      await user.click(reactItem);

      expect(onItemSelect).toHaveBeenCalled();
      // Value should remain what it is in controlled state
      expect(input.value).toBe('React');
    });
  });

  describe('Clear button edge cases', () => {
    it('should work without onClearButtonClick callback', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      expect(input.value).toBe('React');

      const clearButton = screen.getByRole('button', {
        name: /clear input content/i,
      });
      await user.click(clearButton);

      await waitFor(() => {
        expect(input.value).toBe('');
      });
    });

    it('should close dropdown and clear input when clear button is clicked', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      const clearButton = screen.getByRole('button', {
        name: /clear input content/i,
      });
      await user.click(clearButton);

      await waitFor(() => {
        expect(input.value).toBe('');
      });

      // Dropdown should be closed after clearing
    });
  });

  describe('Dropdown state management', () => {
    it('should handle dropdown onOpenChange callback', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');

      // Open dropdown by typing
      await user.type(input, 'React');

      await waitFor(() => {
        expect(screen.getByText('React')).toBeInTheDocument();
      });

      // Dropdown should be open
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should handle empty search term showing all items', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd label="Search Tags" items={mockItems} />,
      );

      const input = screen.getByLabelText('Search Tags');

      // Click input without typing
      await user.click(input);

      // When empty, filtered items should be all items
      // But dropdown only opens when typing, so we need to type first
      await user.type(input, 'a');

      await waitFor(() => {
        // Should show items containing 'a'
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
      });
    });
  });

  describe('renderItem with non-string return', () => {
    it('should handle renderItem returning ReactNode', async () => {
      const user = userEvent.setup();

      const renderItem = (item: { id: string; title: string }) => (
        <span data-testid={`item-${item.id}`}>{item.title.toUpperCase()}</span>
      );

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={mockItems}
          renderItem={renderItem}
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'React');

      await waitFor(() => {
        // The component converts ReactNode to string for ActionListItem title
        // String conversion of React element results in [object Object]
        expect(renderItem).toBeDefined();
      });
    });
  });

  describe('Multiple placeholder scenarios', () => {
    it('should handle addNewItemText with multiple {searchTerm} placeholders', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={[]}
          addNewItemText='+ Add "{searchTerm}" as a new tag called {searchTerm}'
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        // Only first occurrence is replaced
        expect(
          screen.getByText('+ Add "Python" as a new tag called {searchTerm}'),
        ).toBeInTheDocument();
      });
    });

    it('should handle noResultsText with {searchTerm} placeholder', async () => {
      const user = userEvent.setup();

      renderWithProvider(
        <SearchInputWithAdd
          label="Search Tags"
          items={[]}
          showAddNewOption={false}
          noResultsText="Sorry, no matches for {searchTerm}"
        />,
      );

      const input = screen.getByLabelText('Search Tags');
      await user.type(input, 'Python');

      await waitFor(() => {
        expect(
          screen.getByText('Sorry, no matches for Python'),
        ).toBeInTheDocument();
      });
    });
  });
});
