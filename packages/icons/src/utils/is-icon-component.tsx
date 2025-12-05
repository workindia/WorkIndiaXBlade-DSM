import type { IconComponent } from '../components/Icons/types';

const getComponentId = (element: React.ReactNode): string | undefined => {
  if (typeof element === 'object' && element !== null && 'type' in element) {
    return (element.type as { componentId?: string }).componentId;
  }
  return undefined;
};

const isIconComponent = (element: React.ReactNode | IconComponent): boolean => {
  if (typeof element === 'function') {
    const componentId = (element as { componentId?: string }).componentId;
    return componentId?.endsWith('Icon') ?? false;
  }
  return getComponentId(element)?.endsWith('Icon') ?? false;
};

export { isIconComponent };
