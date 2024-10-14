import { Component, html, Input, signal } from '@plumejs/core';
const assetHost = 'http://localhost:1337';

@Component({
  selector: 'app-asset',
  styles: `
    .asset-img {
      height:100%; 
      width:100%; 
      object-fit: cover;
      border-radius: 16px;
    }
  `
})
export class Asset {
  @Input()
  props = signal<{ mime: string; name: string; url: string }>();

  render() {
    if (this.props()) {
      const { mime, name, url } = this.props();
      if (mime.includes('image')) {
        return html`<img class='asset-img' src="${assetHost + url}" alt="${name}" />`;
      }
      return html``;
    }
    return '';
  }
}
