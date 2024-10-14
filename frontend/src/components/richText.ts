import { Component, html, Input, signal } from '@plumejs/core';
import { Remarkable } from 'remarkable';

const markdown = new Remarkable();

@Component({
  selector: 'app-rich-text'
})
export class RichText {
  @Input()
  props = signal<{ content: string }>();

  render() {
    if (this.props()) {
      const { content } = this.props();
      return html`${markdown.render(content)}`;
    } else {
      return '';
    }
  }
}
