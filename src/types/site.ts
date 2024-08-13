export interface SiteConfig {
  urlBase: string;
  title: string;
  description: string;
  keywords: string[];
  authors: Array<{
    name: string;
    url: string;
  }>;
  ogImage: string;
  name: string;
  author: string;
  logo: string;
  slogan: string;
  availability: string[];
  address: {
    direction: string;
    reference: string;
    mapUrl: string;
  };
  phone: string;
  email: string;
  social: Array<{
    name: string;
    url: string;
    icon: string;
  }>;
}
