const handleError = ({
  toolName,
  errorObject,
  mcpErrorMessage = '',
}: {
  toolName: string;
  errorObject?: unknown;
  mcpErrorMessage?: string;
}): {
  isError: true;
  content: { type: 'text'; text: string }[];
} => {
  const getErrorMessage = (): string => {
    if (!errorObject) {
      return mcpErrorMessage;
    }
    if (errorObject instanceof Error) {
      return errorObject.message;
    }
    if (typeof errorObject === 'object') {
      try {
        return JSON.stringify(errorObject);
      } catch {
        return '[Unable to stringify error object]';
      }
    }
    // At this point, errorObject is a primitive (string, number, boolean, etc.), not an object
    // The object case is already handled above, so this is safe
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    return String(errorObject);
  };

  return {
    isError: true,
    content: [
      {
        type: 'text',
        text: `Error in ${toolName}: ${getErrorMessage()}`,
      },
    ],
  };
};

export { handleError };
