---
'@workindia/icons': patch
---

Fix icon color not being translated from dot notation tokens to theme colors. The `useIconProps` hook now properly resolves color tokens like "surface.icon.gray.normal" to their actual theme color values using a new `getThemeColor` utility function.
