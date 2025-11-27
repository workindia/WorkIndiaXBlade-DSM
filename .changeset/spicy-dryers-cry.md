---
'@workindia/tokens': minor
'@workindia/dsm': minor
---

- Added multiple opacity levels (10, 25, 50, 100, 200, 300, 400, 450, 500) for both black and white colors
- Changed `blackNWhite` interface from simple string properties to nested objects with opacity variants
- Introduced new token types: border, breakpoints, and elevation tokens
- Updated `@workindia/dsm` to use the new token structure (accessing `black[500]` instead of `black`)
- Standardized interface naming by removing "WorkIndia" prefix from color scale interfaces
