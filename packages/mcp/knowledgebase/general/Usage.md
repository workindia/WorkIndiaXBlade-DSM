# 👀 How to use WorkIndia DSM?

> Before starting to use WorkIndia DSM make sure you have followed the installation guide and installed all the dependencies like `@workindia/dsm`, `@razorpay/blade`, `styled-components`, `fonts` etc.

## Installation

```bash
npm install @workindia/dsm @razorpay/blade
```

**Note for React 19 users**: If you're using React 19, you may need to use the `--legacy-peer-deps` flag:

```bash
npm install @workindia/dsm @razorpay/blade --legacy-peer-deps
```

## Wrap your App with `WorkIndiaProvider`

Make sure if `WorkIndiaProvider` is not already present in your app, add it to your app entry point.

In some cases, if section of the page is using dark theme while rest of the page is using light theme, you can wrap the section in `WorkIndiaProvider` with `colorScheme` set to `dark`. Although avoid unnecessary usage of WorkIndiaProvider when its not needed.

```tsx
// app.tsx or _app.tsx (Next.js)
import App from './App';
import '@workindia/dsm/fonts.css';
import { WorkIndiaProvider } from '@workindia/dsm';

function AppWrapper(): JSX.Element {
  return (
    <WorkIndiaProvider colorScheme="light">
      <App />
    </WorkIndiaProvider>
  );
}

export default AppWrapper;
```

## Importing Components

All WorkIndia DSM components should be imported from `@workindia/dsm`. **Never** import directly from `@razorpay/blade/components` in your application.

```tsx
// ✅ Correct - Import from @workindia/dsm
import { Button, Heading, Text, Box, Card } from '@workindia/dsm';

// ❌ Wrong - Don't import directly from @razorpay/blade
import { Button } from '@razorpay/blade/components';
```

## Using Components

WorkIndia DSM components are based on Razorpay's Blade Design System but customized for WorkIndia's needs. All components follow the same API as Blade components.

### Example: Using Button Component

```tsx
import { Button, DownloadIcon } from '@workindia/dsm';

function ExportButton() {
  return (
    <Button
      variant="secondary"
      size="medium"
      icon={DownloadIcon}
      iconPosition="left"
    >
      Export
    </Button>
  );
}
```

### Example: Using Form Components

```tsx
import { TextInput, SelectInput, Checkbox, Button, Box } from '@workindia/dsm';

function ContactForm() {
  return (
    <Box>
      <TextInput label="Name" placeholder="Enter your name" />
      <SelectInput label="Country" placeholder="Select country">
        <SelectInput.Option value="india">India</SelectInput.Option>
        <SelectInput.Option value="usa">USA</SelectInput.Option>
      </SelectInput>
      <Checkbox>I agree to the terms and conditions</Checkbox>
      <Button variant="primary">Submit</Button>
    </Box>
  );
}
```

## Color Scheme

WorkIndia DSM supports both light and dark color schemes. You can set the color scheme on the `WorkIndiaProvider`:

```tsx
import { WorkIndiaProvider } from '@workindia/dsm';

function App() {
  return (
    <WorkIndiaProvider colorScheme="dark">
      {/* Your app content */}
    </WorkIndiaProvider>
  );
}
```

## Theme Tokens

WorkIndia DSM uses restricted design tokens that enforce WorkIndia's brand guidelines. The theme is automatically applied when you use `WorkIndiaProvider`. It restricts colors to:

- **Brand**: Primary and secondary brand colors
- **Feedback**: Success and error colors
- **Text**: Body, heading, and subtle text colors

When using styled components with WorkIndia DSM, you can access theme tokens:

```tsx
import styled from 'styled-components';
import { useTheme } from '@workindia/dsm';

const StyledCard = styled.div`
  width: 368px;
  background-color: ${({ theme }) =>
    theme.colors.surface.background.gray.moderate};
  padding: ${({ theme }) => theme.spacing[4]}px;
`;
```

> **Important**: Tokens are an integral part of the design system and are used to store design decisions behind a token(variable) name. This makes things easier to update without you making any change. For this reason **never hardcode** token values in your code but rather use the token name.

## Type Safety

All WorkIndia DSM components are fully typed with TypeScript. The theme enforces type safety for color tokens, ensuring you only use approved WorkIndia design tokens.

## Next.js Integration

For Next.js applications, WorkIndia DSM works seamlessly. Make sure to import fonts in your root layout or `_app.tsx`:

```tsx
// app/layout.tsx (Next.js App Router)
import '@workindia/dsm/fonts.css';
import { WorkIndiaProvider } from '@workindia/dsm';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WorkIndiaProvider>{children}</WorkIndiaProvider>
      </body>
    </html>
  );
}
```

## Best Practices

1. **Always use WorkIndiaProvider**: Wrap your app with `WorkIndiaProvider` at the root level
2. **Import from @workindia/dsm**: Never import directly from `@razorpay/blade/components`
3. **Use tokens, not hardcoded values**: Always use theme tokens instead of hardcoded colors or spacing values
4. **Follow component APIs**: All components follow the same API as Blade components - refer to component documentation for props and usage
5. **TypeScript support**: Leverage TypeScript types for better development experience and type safety
