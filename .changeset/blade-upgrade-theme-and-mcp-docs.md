---
'@workindia/dsm': minor
'@workindia/icons': minor
'@workindia/dsm-mcp': minor
---

Upgrade Blade, extend DSM theme tokens, export icon utilities, and refresh MCP icon docs.

**@workindia/dsm:**

- Upgrade `@razorpay/blade` from **12.68.0** to **12.98.1** (includes SideNav text alignment fix from 12.96.4)
- Extend `interactive.background` on light and dark with **`ghost`** for `gray`, `staticBlack`, and `staticWhite`
- Extend `interactive.border` on light and dark with **`fadedHighlighted`** for `staticBlack` and `staticWhite`
- Extend **`popup`** on light and dark with semantic **`background`** and **`border`** maps for `information`, `negative`, `neutral`, `notice`, and `positive`, plus **`gray`** (`subtle` / `moderate` / `intense`)
- Map `@razorpay/blade/components` to `src/__mocks__/blade-components.tsx` in Jest so tests do not load Blade's ESM graph (e.g. Recharts)

**@workindia/icons:**

- Export `parseViewBox` from `use-rectangular-icon-props` for direct use and tests
- Improve viewBox validation in rectangular icon props
- Require peer dependency `@workindia/dsm` **>=0.8.0**

**@workindia/dsm-mcp:**

- Regenerate icon knowledgebase docs with accurate descriptions for all exported icons
- Update MCP doc utilities to serve the expanded icon knowledgebase
