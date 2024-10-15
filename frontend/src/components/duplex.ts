import { Component, html, Input, signal } from '@plumejs/core';

@Component({
  selector: 'app-duplex',
  styles: `
    .duplex-container {
      display: flex;
      align-items: center;
      gap: 70px;
      margin: 70px 0;
      &.reverse {
        flex-direction: row-reverse;
      }
      .image {
        height: 399px;
        width: 595px;
        flex: 40%;
      }
      .description {
        flex: 60%;
      }
    }
  `
})
export class Duplex {
  @Input()
  props = signal<{
    heading: string;
    description: string;
    imagePosition: 'right' | 'left';
    image: Record<string, unknown>;
  }>();

  render() {
    if (this.props()) {
      const { heading, description, image, imagePosition } = this.props();
      return html` <div class="container mx-auto duplex-container ${imagePosition === 'left' ? '' : 'reverse'}">
        <app-asset class="image" data-input=${{ props: image }}></app-asset>
        <div class="description">
          <h2 class="text-4xl font-bold text-foreground">${heading}</h2>
          <p class="text-gray-500 mt-8 text-lg">${description}</p>
        </div>
      </div>`;
    }
    return '';
  }
}
