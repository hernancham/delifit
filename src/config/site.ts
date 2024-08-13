import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  urlBase: `${process.env.NEXT_PUBLIC_APP_URL}`,
  title: "Delifit",
  description: "Delifit, disfruta la aventura de comer delicioso y saludable",
  keywords: ["Delifit", "Comida Saludable", "Food Ordering App"],
  authors: [
    {
      name: "Hernan Ander Chambilla Chambilla",
      url: "https://github.com/hernancham",
    },
    {
      name: "Rivaldo Danilo Moron Maylle",
      url: "https://github.com/RDaniloMM",
    },
  ],
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/assets/delifit_logo.png`,
  name: "Delifit",
  author: "Milagros Calcina C",
  logo: "/delifit-logos/delifit-logo.svg",
  slogan: "Comida Saludable a tu alcance",
  availability: [
    "Lunes a Viernes:",
    "9:00 a.m. a 6:00 p.m.",
    "Sábados:",
    "9:00 a.m. a 2:00 p.m.",
    "Domingos:",
    "Solo Delivery de 2 p.m. a 7 p.m.",
  ],
  address: {
    direction:
      "Intersección de calle Destua con calle Zela - BULEVAR PLAZA, Tacna - Tacna - Perú",
    reference: "BULEVAR PLAZA",
    mapUrl: "https://goo.gl/maps/123456789",
  },
  phone: "917774573",
  email: "delifit.tacna@gmail.com",
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/delifit.tacna",
      icon: "/social-icons/icons8-facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/delifit.tacna/",
      icon: "/social-icons/icons8-instagram.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@delifit.tacna18",
      icon: "/social-icons/icons8-tiktok.svg",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/51917774573",
      icon: "/social-icons/icons8-whatsapp.svg",
    },
  ],
};
