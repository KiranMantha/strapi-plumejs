import type { Struct, Schema } from '@strapi/strapi';

export interface ComponentsRichText extends Struct.ComponentSchema {
  collectionName: 'components_components_rich_texts';
  info: {
    displayName: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ComponentsQuote extends Struct.ComponentSchema {
  collectionName: 'components_components_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quotation: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ComponentsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_hero_banners';
  info: {
    displayName: 'HeroBanner';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    textPosition: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface ComponentsDuplex extends Struct.ComponentSchema {
  collectionName: 'components_components_duplexes';
  info: {
    displayName: 'Duplex';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.rich-text': ComponentsRichText;
      'components.quote': ComponentsQuote;
      'components.hero-banner': ComponentsHeroBanner;
      'components.duplex': ComponentsDuplex;
    }
  }
}
