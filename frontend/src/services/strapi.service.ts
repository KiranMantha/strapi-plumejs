import { Injectable } from '@plumejs/core';
import axios from 'axios';
import { MappedComponent } from '../models';
import { mapComponents } from '../utils';

@Injectable()
export class StrapiService {
  async getContent(entity: string): Promise<{ title: string; components: MappedComponent[] }> {
    const endpoint = `http://localhost:1337/api${entity}?pLevel=3`;
    const token =
      '8e2588c1d6f71016acbeb79dc74cd6d58158807c820edf16234d507445ba1297a2d956ae34306473f131af0467dfc72a4c083adc0418412e32417986054743f00c71644d5759e497841e7d5256db19e4ac214c22a9c0037a788099173a8acf9d8763f7bf7bc624e30b14b319095981e31658e8917520eff812b35b18f6d98988';
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const { title, components } = response.data.data;
    const mappedComponents = mapComponents(components);
    return { title: title, components: mappedComponents };
  }
}
