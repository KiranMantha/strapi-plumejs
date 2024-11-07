import { CMSComponent, MappedComponent } from '../models';
import { componentMap } from './cms-components';

async function loadMappedComponents(components: Array<string>, props: Record<string, Record<string, unknown>>) {
  const mappedComponents: MappedComponent[] = [];
  const loadedComponents = await Promise.all(
    components.map(async (component) => {
      if (componentMap[component]) {
        const loadedComponent = await componentMap[component];
        return [component, loadedComponent];
      } else {
        console.warn(`Component "${component}" not found in componentMap.`);
        return [component, null];
      }
    })
  );
  for (const [componentName, Component] of loadedComponents) {
    if (Component) {
      mappedComponents.push({ componentType: Component['__selector__'], props: props[componentName] });
    }
  }
  return mappedComponents;
}

export async function mapComponents(components: CMSComponent[]): Promise<MappedComponent[]> {
  const props = {};
  const dynamicComponents = [];

  for (const component of components) {
    const { componentType, data } = component;
    if (Array.isArray(data)) {
      data.forEach((item) => {
        dynamicComponents.push(componentType);
        props[componentType] = item;
      });
    } else {
      dynamicComponents.push(componentType);
      props[componentType] = data;
    }
  }
  return await loadMappedComponents(dynamicComponents, props);
}
