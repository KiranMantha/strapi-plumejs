export const componentMap = {
  heroBanner: import('../components/heroBanner').then((m) => m.HeroBanner),
  duplex: import('../components/duplex').then((m) => m.Duplex),
  quote: import('../components/quote').then((m) => m.Quote),
  image: import('../components/asset').then((m) => m.Asset),
  richText: import('../components/richText').then((m) => m.RichText)
};
