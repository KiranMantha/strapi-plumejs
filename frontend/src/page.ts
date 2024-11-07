import { Component, html, signal } from '@plumejs/core';
import { Router } from '@plumejs/router';
import { MappedComponent } from './models';
import { StrapiService } from './services/strapi.service';

@Component({
  selector: 'app-page',
  deps: [Router, StrapiService]
})
export class Page {
  constructor(
    private router: Router,
    private strapiService: StrapiService
  ) {}

  components = signal<MappedComponent[]>([]);

  beforeMount() {
    this.router.getCurrentRoute().subscribe(async (routeInfo) => {
      this.strapiService.getContent(routeInfo.path).then((data) => {
        this.components.set(data.components);
      });
    });
  }

  render() {
    return html`${this.components().map(
      ({ componentType, props }) => html`<${componentType} data-input=${{ props }}></${componentType}>`
    )}`;
  }
}
