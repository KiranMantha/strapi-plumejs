import { Component, html, Input, signal } from '@plumejs/core';

@Component({
  selector: 'app-hero-banner',
  styles: `
    .hero-banner-container {
      height: 670px;
      background-image: var(--bg-image);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: #000;

      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        max-width: 30rem;

        &.align-left {
          align-items: flex-start;
          margin-right: auto;
          margin-left: 250px;
        }
        &.align-center {
          align-items: center;
          margin: auto;
        }
        &.align-right {
          align-items: flex-end;
          margin-left: auto;
          margin-right: 250px;
        }
      }
    }
  `
})
export class HeroBanner {
  @Input()
  props = signal<{
    heading: string;
    description: string;
    textPosition: 'left' | 'center' | 'right';
    image: Record<string, unknown>;
  }>();

  render() {
    if (this.props()) {
      const { heading, description, textPosition, image } = this.props();

      return html`<div
        class="hero-banner-container"
        style="--bg-image: url(${'http://localhost:1337' + image?.url}); color: ${image?.url ? '#000' : '#fff'}"
      >
        <div class="content align-${textPosition} text-${textPosition}">
          <h2 class="text-5xl text-primary mb-4 font-semibold">${heading}</h2>
          <p class="text-2xl text-muted-foreground font-thin">${description}</p>
        </div>
      </div>`;
    }
    return '';
  }
}
