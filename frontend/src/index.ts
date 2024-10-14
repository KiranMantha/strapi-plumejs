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
      <main data-testid="container">
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onclick=${(e) => {
                  this.navigateTo(e, '/home');
                }}
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                onclick=${(e) => {
                  this.navigateTo(e, '/about');
                }}
                >About Us</a
              >
            </li>
          </ul>
        </nav>
        <router-outlet></router-outlet>
      </main>
    `;
  }
}
