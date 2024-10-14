import { Component, html, Input, signal } from '@plumejs/core';
import './richText';

@Component({
  selector: 'app-quote',
  styles: `
    .quote-container {
      display: flex;
      align-items: center;
      gap: 35px;
      &.reverse {
        flex-direction: row-reverse;
      }
      .image {
        height: 505px;
        width: 605px;
        flex: 35%;
      }
      .description {
        flex: 65%;
      }
    }
  `
})
export class Quote {
  @Input()
  props = signal<{
    image: Record<string, unknown>;
    quotation: string;
  }>();

  render() {
    if (this.props()) {
      const { image, quotation } = this.props();
      return html` <div class="quote-container">
        <app-asset class="image" data-input=${{ props: image }}></app-asset>
        <app-rich-text class="description" data-input=${{ props: { content: quotation } }}></app-rich-text>
      </div>`;
    }
    return '';
  }
}
