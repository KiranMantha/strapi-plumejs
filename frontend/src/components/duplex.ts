import { Component, html, Input, signal } from '@plumejs/core';

@Component({
  selector: 'app-duplex',
  styles: `
    .duplex-container {
      display: flex;
      align-items: center;
      gap: 35px;
      &.reverse {
        flex-direction: row-reverse;
      }
      .image {
        height: 399px;
        width: 595px;
        flex: 35%;
      }
      .description {
        flex: 65%;
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
      return html` <div class="duplex-container ${imagePosition === 'left' ? '' : 'reverse'}">
        <app-asset class="image" data-input=${{ props: image }}></app-asset>
        <div class="description">
          <h3>${heading}</h3>
          <p>${description}</p>
        </div>
      </div>`;
    }
    return '';
  }
}
