---
'@workindia/dsm': minor
'@workindia/dsm-mcp': patch
---

Add SearchInputWithAdd component with custom "Add New" functionality

**@workindia/dsm:**

- Added `SearchInputWithAdd` component that extends Blade's `SearchInput` with the ability to add new items
- When search results are empty, displays an option to add the missing search term as "+ Add 'searchTerm'" (customizable via `addNewItemText` prop)
- Supports controlled and uncontrolled modes for search term management
- Includes `onAddNewItem` callback prop that triggers when a new, non-existent search term is added
- Supports custom filtering via `filterFn` prop
- Supports custom item rendering via `renderItem` prop
- Includes `testID` and `selectionType` props for testing and multi-select scenarios

**@workindia/dsm-mcp:**

- Added knowledge base documentation for `SearchInputWithAdd` component

**Other Changes:**

- Added global CSS reset `* { box-sizing: border-box; }` to `fonts.css` for consistent layout behavior
- Updated Jest configuration to exclude index.ts files from coverage reporting
- Added `@testing-library/user-event` as dev dependency for improved test interactions
