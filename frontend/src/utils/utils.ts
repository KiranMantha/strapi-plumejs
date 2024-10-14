import { CMSComponent, MappedComponent } from '../models';
import { componentMap } from './cms-components';

const getComponentSelector = (componentName: string) => componentMap[componentName]['__selector__'];

export function mapComponents(components: CMSComponent[]): MappedComponent[] {
  const result = [];
  for (const component of components) {
    const { componentType, data } = component;
    if (Array.isArray(data)) {
      data.forEach((item) => {
        result.push({
          componentType: getComponentSelector(componentType),
          props: item
        });
      });
    } else {
      result.push({
        componentType: getComponentSelector(componentType),
        props: data
      });
    }
  }
  return result;
}
