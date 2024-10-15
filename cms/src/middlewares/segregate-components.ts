/**
 * `segregate-components` middleware
 */

import type { Core } from '@strapi/strapi';

// Define the structured component response
interface StructuredComponent {
  componentType: string;
  data: { [key: string]: any };
  order: number;
}

// Check if a field is a component (either object or array of objects with an 'id')
const isComponent = (field: any): boolean => {
  if (field && typeof field === 'object') {
    // If it's an array, check that all elements in the array have an 'id'
    if (Array.isArray(field) && field.length) {
      return field.every((item) => item && typeof item === 'object' && 'id' in item);
    }
    // If it's an object, check that it has an 'id'
    return 'id' in field;
  }
  return false;
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In segregate-components middleware.');

    await next();
    if (ctx.request.url.startsWith('/api/') && ctx.response && ctx.response.body && ctx.response.body.data) {
      const entity = ctx.response.body.data; // Assuming the main entity is under `data`

      // Components array to store the segregated components
      const components: StructuredComponent[] = [];

      // Iterate over each key-value pair in the entity
      Object.entries(entity).forEach(([key, value], index) => {
        if (isComponent(value)) {
          // If it's a component, push it to the components array with type and order
          components.push({
            componentType: key, // Use the key as the component type (e.g., 'heroBanner')
            data: value, // The actual data of the component
            order: index + 1 // Use the index to maintain order
          });

          // Remove the component from the main entity to keep the rest clean
          delete entity[key];
        }
      });

      // Add the components array back to the entity
      ctx.response.body = {
        ...ctx.response.body, // Preserve meta and other top-level fields
        components // Add the structured components array
      };
    }
  };
};
