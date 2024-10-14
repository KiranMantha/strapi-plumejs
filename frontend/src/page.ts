import { Component, html, signal } from '@plumejs/core';
import { Router } from '@plumejs/router';
import { StrapiService } from './services/strapi.service';
import { MappedComponent } from './models';

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
    try {
      this.router.getCurrentRoute().subscribe(async (routeInfo) => {
        console.log(routeInfo);
        this.strapiService.getContent(routeInfo.path).then((data) => {
          console.log(data);
          this.components.set(data.components);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return html`${this.components().map(
      ({ componentType, props }) => html`<${componentType} data-input=${{ props }}></${componentType}>`
    )}`;
  }
}
