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
        &.text-left {
          align-items: flex-start;
        }
        &.text-center {
          align-items: center;
        }
        &.text-right {
          align-items: flex-end;
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
        <div class="content text-${textPosition}">
          <h2>${heading}</h2>
          <p>${description}</p>
        </div>
      </div>`;
    }
    return '';
  }
}
