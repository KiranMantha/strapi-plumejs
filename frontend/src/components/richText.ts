import { Component, html, Input, signal } from '@plumejs/core';
import { Remarkable } from 'remarkable';

const markdown = new Remarkable();

@Component({
  selector: 'app-rich-text',
  styles: `
    .rich-text {
      margin-top: 90px;

      .prose {
        max-width: 100%;
      }
    }
  `
})
export class RichText {
  @Input()
  props = signal<{ content: string }>();

  render() {
    if (this.props()) {
      const { content } = this.props();
      return html`<div class="rich-text container mx-auto">
        <article class="prose lg:prose-xl w-full mt-8">${markdown.render(content)}</article>
      </div>`;
    } else {
      return '';
    }
  }
}
