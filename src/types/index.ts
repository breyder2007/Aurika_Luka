export interface Testimonial {
  id: number;
  name: string;
  sport: string;
  quote: string;
  image: string;
}

export interface Service {
  id: number;
  title: {
    fr: string;
    en: string;
    uk: string;
  };
  description: {
    fr: string;
    en: string;
    uk: string;
  };
  icon: string;
}

export interface Sport {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  sport: string;
  featured?: boolean;
}

export interface BeforeAfter {
  id: number;
  title: {
    fr: string;
    en: string;
    uk: string;
  };
  description: {
    fr: string;
    en: string;
    uk: string;
  };
  beforeImage: string;
  afterImage: string;
  sport: string;
}