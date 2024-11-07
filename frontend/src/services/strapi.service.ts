import { Injectable } from '@plumejs/core';
import axios from 'axios';
import { MappedComponent } from '../models';
import { env, mapComponents } from '../utils';

@Injectable()
export class StrapiService {
  async getContent(entity: string): Promise<{ title: string; components: MappedComponent[] }> {
    const endpoint = `${env.PLUME_CMS_ENDPOINT}/api${entity}?pLevel=3`;
    const token = env.PLUME_CMS_TOKEN;
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const { title, components } = response.data.data;
    const mappedComponents = await mapComponents(components);
    return { title: title, components: mappedComponents };
  }
}
