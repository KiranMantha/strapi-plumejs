import { Component, html, Input, signal } from '@plumejs/core';
import { Router } from '@plumejs/router';

@Component({
  selector: 'app-root',
  styles: import('./styles/styles.scss?inline'),
  deps: [Router],
  root: true
})
export class AppComponent {
  @Input()
  props = signal();

  constructor(private router: Router) {
    Router.registerRoutes({
      routes: [
        {
          path: '/',
          redirectTo: '/home'
        },
        {
          path: '/*',
          template: '<app-page></app-page>',
          templatePath: () => import('./page')
        }
      ],
      preloadAllRoutes: true
    });
  }

  navigateTo(e: Event, path: string) {
    e.preventDefault();
    this.router.navigateTo(path);
  }

  render() {
    return html`
      <header class="inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
            </a>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              class="text-lg leading-6 text-gray-700"
              onclick=${(e) => {
                this.navigateTo(e, '/home');
              }}
              >Home</a
            >
            <a
              href="#"
              class="text-lg leading-6 text-gray-700"
              onclick=${(e) => {
                this.navigateTo(e, '/about');
              }}
              >About</a
            >
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>
      <main data-testid="container">
        <router-outlet></router-outlet>
      </main>
    `;
  }
}
