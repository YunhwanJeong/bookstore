/**
 * Generates a consistent format for data-test-id attributes used across the application.
 * @param {string} component - The component or context this ID is associated with.
 * @param {string} [identifier=''] - An optional identifier to create unique test IDs.
 * @returns {string} A formatted string that can be used as a data-test-id attribute.
 */
const generateTestId = (component: string, identifier = ''): string => {
  return `${component}${identifier ? `-${identifier}` : ''}`;
};

export { generateTestId };
