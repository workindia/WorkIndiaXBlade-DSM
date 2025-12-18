## Component Name

SearchInputWithAdd

## Description

SearchInputWithAdd is a custom extension of the SearchInput component that provides an option to add new items when no search results are found. Instead of just showing "No results found", it displays an actionable "+ Add [searchTerm]" option that allows users to create new entries on the fly. This is particularly useful for tag inputs, category selectors, or any search interface where users might need to create new items that don't exist in the current dataset.

The component wraps SearchInput with a Dropdown and provides built-in filtering, item selection, and the ability to add new items with a customizable callback.

## TypeScript Types

The following types define the props that the SearchInputWithAdd component accepts. These types are essential for proper usage of the component in TypeScript projects.

````typescript
type SearchInputWithAddProps = Omit<SearchInputProps, 'trailing'> & {
  /**
   * Array of items to search through. Each item should have at least a 'title' field.
   */
  items: Array<{
    id: string;
    title: string;
    [key: string]: unknown;
  }>;

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
   *
   * @default "+ Add \"{searchTerm}\""
   *
   * @example
   * ```tsx
   * addNewItemText="+ Create \"{searchTerm}\""
   * addNewItemText="+ Add new tag: {searchTerm}"
   * ```
   */
  addNewItemText?: string;

  /**
   * Whether to show the "Add New" option when no results are found
   *
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
   *
   * @default false
   */
  isDropdownLoading?: boolean;

  /**
   * Custom message to show when no results are found and showAddNewOption is false
   *
   * @default "No results found for \"{searchTerm}\""
   */
  noResultsText?: string;

  /**
   * Test identifier for testing purposes
   */
  testID?: string;

  /**
   * Selection type for the dropdown
   *
   * @default "single"
   */
  selectionType?: 'single' | 'multiple';
};
````

## Example

### Basic Usage with Tag Selection

This example demonstrates a basic tag selector where users can search for existing tags or add new ones.

```tsx
import { useState } from 'react';
import { SearchInputWithAdd, Box, Chip, ChipGroup } from '@workindia/dsm';

function TagSelector() {
  const [availableTags, setAvailableTags] = useState([
    { id: '1', title: 'React' },
    { id: '2', title: 'TypeScript' },
    { id: '3', title: 'JavaScript' },
    { id: '4', title: 'Node.js' },
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagSelect = (tag: { id: string; title: string }) => {
    if (!selectedTags.includes(tag.id)) {
      setSelectedTags([...selectedTags, tag.id]);
    }
  };

  const handleAddNewTag = (tagName: string) => {
    const newTag = {
      id: `tag-${Date.now()}`,
      title: tagName,
    };
    setAvailableTags([...availableTags, newTag]);
    setSelectedTags([...selectedTags, newTag.id]);
    console.log('New tag added:', tagName);
  };

  const handleRemoveTag = (tagId: string) => {
    setSelectedTags(selectedTags.filter((id) => id !== tagId));
  };

  return (
    <Box>
      <SearchInputWithAdd
        label="Search or Add Tags"
        placeholder="Search for tags..."
        items={availableTags}
        onItemSelect={handleTagSelect}
        onAddNewItem={handleAddNewTag}
        addNewItemText='+ Add tag "{searchTerm}"'
        name="tagSearch"
      />

      {selectedTags.length > 0 && (
        <Box marginTop="spacing.4">
          <ChipGroup>
            {selectedTags.map((tagId) => {
              const tag = availableTags.find((t) => t.id === tagId);
              return tag ? (
                <Chip key={tagId} onDismiss={() => handleRemoveTag(tagId)}>
                  {tag.title}
                </Chip>
              ) : null;
            })}
          </ChipGroup>
        </Box>
      )}
    </Box>
  );
}
```

### Controlled Component with Custom Filter

This example shows how to use the component in controlled mode with a custom filter function.

```tsx
import { useState } from 'react';
import { SearchInputWithAdd, Box, Text } from '@workindia/dsm';

function CategorySelector() {
  const [searchValue, setSearchValue] = useState('');
  const [categories] = useState([
    {
      id: '1',
      title: 'Electronics',
      description: 'Electronic devices and accessories',
    },
    { id: '2', title: 'Clothing', description: 'Apparel and fashion items' },
    { id: '3', title: 'Books', description: 'Physical and digital books' },
    {
      id: '4',
      title: 'Home & Garden',
      description: 'Home improvement and gardening',
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Custom filter that searches both title and description
  const customFilter = (
    item: { id: string; title: string; description: string },
    term: string,
  ) => {
    const searchTerm = term.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
    );
  };

  const handleCategorySelect = (category: { id: string; title: string }) => {
    setSelectedCategory(category.id);
    setSearchValue(category.title);
  };

  const handleAddNewCategory = (categoryName: string) => {
    console.log('Request to add new category:', categoryName);
    // In a real app, you might make an API call here
    alert(`New category "${categoryName}" will be created`);
  };

  return (
    <Box>
      <SearchInputWithAdd
        label="Select Category"
        placeholder="Search categories..."
        items={categories}
        value={searchValue}
        onChange={({ value }) => setSearchValue(value || '')}
        onItemSelect={handleCategorySelect}
        onAddNewItem={handleAddNewCategory}
        filterFn={customFilter}
        addNewItemText='+ Create category "{searchTerm}"'
        name="categorySearch"
      />

      {selectedCategory && (
        <Box marginTop="spacing.4">
          <Text>Selected Category ID: {selectedCategory}</Text>
        </Box>
      )}
    </Box>
  );
}
```

### Custom Rendering with Additional Data

This example demonstrates custom rendering of items in the dropdown with additional metadata.

```tsx
import { useState } from 'react';
import { SearchInputWithAdd, Box, Text, Badge } from '@workindia/dsm';

interface User {
  id: string;
  title: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

function UserSelector() {
  const [users] = useState<User[]>([
    { id: '1', title: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: '2', title: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: '3', title: 'Bob Johnson', email: 'bob@example.com', role: 'user' },
  ]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
  };

  const handleInviteUser = (email: string) => {
    console.log('Invite new user:', email);
    // In a real app, send invitation email
    alert(`Invitation will be sent to ${email}`);
  };

  // Custom render function to show user details
  const renderUser = (user: User) => {
    return (
      <Box display="flex" flexDirection="column">
        <Text weight="semibold">{user.title}</Text>
        <Text size="small" color="surface.text.gray.subtle">
          {user.email}
        </Text>
      </Box>
    );
  };

  return (
    <Box>
      <SearchInputWithAdd
        label="Search Users"
        placeholder="Search by name or email..."
        items={users}
        onItemSelect={handleUserSelect}
        onAddNewItem={handleInviteUser}
        renderItem={renderUser}
        addNewItemText='+ Invite "{searchTerm}"'
        name="userSearch"
        filterFn={(user, term) => {
          const searchTerm = term.toLowerCase();
          return (
            user.title.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
          );
        }}
      />

      {selectedUser && (
        <Box marginTop="spacing.4">
          <Text>Selected User: {selectedUser.title}</Text>
          <Text size="small" color="surface.text.gray.subtle">
            Email: {selectedUser.email}
          </Text>
          <Badge
            color={selectedUser.role === 'admin' ? 'positive' : 'neutral'}
            marginTop="spacing.2"
          >
            {selectedUser.role}
          </Badge>
        </Box>
      )}
    </Box>
  );
}
```

### Async Loading with API Integration

This example shows how to integrate with an API and handle loading states.

```tsx
import { useState, useEffect } from 'react';
import { SearchInputWithAdd, Box, Text } from '@workindia/dsm';

function ProductSearch() {
  const [products, setProducts] = useState<
    Array<{ id: string; title: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate API call to fetch products
  useEffect(() => {
    if (searchTerm.length > 0) {
      setIsLoading(true);

      // Simulate API delay
      const timer = setTimeout(() => {
        // Mock API response
        const mockProducts = [
          { id: '1', title: 'Product A' },
          { id: '2', title: 'Product B' },
          { id: '3', title: 'Product C' },
        ].filter((p) =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        setProducts(mockProducts);
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setProducts([]);
    }
  }, [searchTerm]);

  const handleProductSelect = (product: { id: string; title: string }) => {
    console.log('Selected product:', product);
  };

  const handleCreateProduct = async (productName: string) => {
    console.log('Creating new product:', productName);
    // In a real app, make API call to create product
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const newProduct = {
        id: `product-${Date.now()}`,
        title: productName,
      };
      setProducts([...products, newProduct]);
      setIsLoading(false);
      alert(`Product "${productName}" created successfully!`);
    }, 1000);
  };

  return (
    <Box>
      <SearchInputWithAdd
        label="Search Products"
        placeholder="Search or create product..."
        items={products}
        value={searchTerm}
        onChange={({ value }) => setSearchTerm(value || '')}
        onItemSelect={handleProductSelect}
        onAddNewItem={handleCreateProduct}
        isDropdownLoading={isLoading}
        addNewItemText='+ Create product "{searchTerm}"'
        name="productSearch"
      />
    </Box>
  );
}
```

### Without Add Option (Standard Search Only)

This example shows how to disable the "Add New" option to use it as a standard search with dropdown.

```tsx
import { useState } from 'react';
import { SearchInputWithAdd, Box, Text } from '@workindia/dsm';

function CountrySelector() {
  const [countries] = useState([
    { id: '1', title: 'United States' },
    { id: '2', title: 'United Kingdom' },
    { id: '3', title: 'Canada' },
    { id: '4', title: 'Australia' },
    { id: '5', title: 'India' },
  ]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountrySelect = (country: { id: string; title: string }) => {
    setSelectedCountry(country.title);
  };

  return (
    <Box>
      <SearchInputWithAdd
        label="Select Country"
        placeholder="Search countries..."
        items={countries}
        onItemSelect={handleCountrySelect}
        showAddNewOption={false}
        noResultsText='No countries found matching "{searchTerm}"'
        name="countrySearch"
      />

      {selectedCountry && (
        <Box marginTop="spacing.4">
          <Text>Selected Country: {selectedCountry}</Text>
        </Box>
      )}
    </Box>
  );
}
```

## Key Features

1. **Automatic Filtering**: Built-in filtering with customizable filter function
2. **Add New Items**: Shows "+ Add [searchTerm]" option when no results are found
3. **Customizable Text**: Customize the "Add" button text with the `addNewItemText` prop
4. **Custom Rendering**: Use `renderItem` prop to customize how items are displayed
5. **Controlled/Uncontrolled**: Supports both controlled and uncontrolled modes
6. **Loading States**: Built-in support for async operations with `isDropdownLoading`
7. **Flexible Callbacks**: Separate callbacks for item selection and adding new items
8. **All SearchInput Props**: Inherits all props from the standard SearchInput component
9. **Selection Types**: Supports both single and multiple selection modes via `selectionType` prop
10. **Test Support**: Includes `testID` prop for easy testing with testing libraries

## Best Practices

1. **Use Controlled Mode for Complex State**: When dealing with async operations or complex state management, use controlled mode with `value` and `onChange` props.

2. **Provide Meaningful Add Text**: Customize the `addNewItemText` to match your use case (e.g., "+ Create tag", "+ Invite user", "+ Add category").

3. **Handle Loading States**: When fetching data asynchronously, use `isDropdownLoading` to show a loading indicator.

4. **Validate Before Adding**: In your `onAddNewItem` callback, validate the input before creating new items.

5. **Custom Filtering**: For items with multiple searchable fields, provide a custom `filterFn` to search across all relevant fields.

6. **Accessibility**: The component inherits all accessibility features from SearchInput. Make sure to provide proper labels.

## Related Components

- **SearchInput**: The base component that SearchInputWithAdd extends
- **Dropdown**: Used internally for the dropdown overlay
- **ActionList**: Used internally for displaying search results
- **AutoComplete**: Alternative component for autocomplete functionality without the add option
