/**
 * Do you want to define `displayName` or `componentId` on your component? Use this instead to make sure treeshaking doesn't break.
 *
 * ## Usage
 *
 * ### ❌ Incorrect Code (Breaks treeshaking)
 *
 * ```ts
 * const _MyComponent = () => {};
 * const MyComponent = React.forwardRef(_MyComponent);
 * const MyComponent.displayName = 'MyComponent'; // this breaks treeshaking
 *
 * export { MyComponent }
 * ```
 *
 * ### ✅ Correct Code (No Side-Effects. Treeshaking continues to work)
 *
 * ```ts
 * const _MyComponent = () => {};
 * const MyComponentWithRef = React.forwardRef(_MyComponent);
 * const MyComponent = assignWithoutSideEffects(
 *  MyComponentWithRef,
 *  { displayName: 'MyComponent' }
 * );
 *
 * export { MyComponent }
 * ```
 * @param component - The component to assign the properties to
 * @param sourceObj - The properties to assign to the component
 * @param sourceObj.displayName - The display name of the component
 * @param sourceObj.componentId - The component id of the component
 * @returns The component with the properties assigned
 */
// We're matching the types of this with Object.assign types
// Using a more permissive constraint that accepts React components (which are callable) and objects
const assignWithoutSideEffects = <
  T extends object | ((...args: unknown[]) => unknown),
>(
  component: T,
  sourceObj: { displayName?: string; componentId?: string },
): T => {
  return /*#__PURE__*/ Object.assign(component, sourceObj);
};

export { assignWithoutSideEffects };
