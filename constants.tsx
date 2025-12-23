
export const COLORS = {
  primary: '#f97316', // tailwind orange-500
  dark: '#0a0a0a',
  neutral: '#171717',
  cocacola: '#ed1c24',
};

export const BRAND_COPY = {
  brandName: "Minute Maid Pulpy",
  logoUrl: "https://webtntlprd.blob.core.windows.net/content/1751962133042-Minute_Maid%20Pulpy-EN.webp",
  hero: {
    title: "PURE ENERGY.",
    subtitle: "REAL PULP. NO COMPROMISE.",
    cta: "Experience Freshness"
  },
  benefits: [
    {
      title: "Sun-Kissed Harvest",
      description: "Hand-picked oranges from the world's most vibrant orchards, squeezed within hours of picking."
    },
    {
      title: "Texture You Can Feel",
      description: "Rich, natural pulp that delivers a burst of authentic citrus experience in every sip."
    },
    {
      title: "Clean Energy",
      description: "Zero added sugars. Zero artificial flavors. Pure, unadulterated vitality."
    }
  ],
  story: {
    heading: "BORN FROM THE SUN.",
    content: "Minute Maid Pulpy isn't just a drink; it's a movement towards authentic vitality. We believe in the power of nature's original design—pure, energetic, and undeniably fresh."
  },
  corporate: {
    endorsement: "A product of The Coca-Cola Company",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png"
  }
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Pulpy Orange",
    variant: "Standard PET",
    size: "400 ml",
    price: "₹35",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400&auto=format&fit=crop",
    popular: true
  },
  {
    id: 2,
    name: "Pulpy Orange",
    variant: "Single Serve",
    size: "250 ml",
    price: "₹23",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=400&auto=format&fit=crop",
    popular: false
  },
  {
    id: 3,
    name: "Pulpy Orange",
    variant: "Family Pack",
    size: "1 L",
    price: "₹85",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400&auto=format&fit=crop",
    popular: true
  },
  {
    id: 4,
    name: "Pulpy Orange",
    variant: "Juice Combo",
    size: "Multi-Pack",
    price: "₹180",
    image: "https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=400&auto=format&fit=crop",
    popular: false
  },
  {
    id: 5,
    name: "Pulpy Orange",
    variant: "Bulk Bundle",
    size: "2 x 1 L",
    price: "₹144",
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=400&auto=format&fit=crop",
    popular: false
  }
];

export const LEGAL_TEXT = {
  privacy: {
    title: "Privacy Policy",
    content: `At Minute Maid Pulpy, we respect your privacy. This policy outlines how we handle your data. We collect minimal information necessary to provide you with the best brand experience. Your data is never sold to third parties. We use industry-standard encryption to protect any information shared with us through our digital platforms. As part of The Coca-Cola Company, we adhere to global data protection standards.`
  },
  terms: {
    title: "Terms & Conditions",
    content: `By accessing this website, you agree to be bound by these Terms and Conditions. All content including images, text, and logos are property of The Coca-Cola Company. Unauthorized use of brand assets is strictly prohibited. We reserve the right to update these terms at any time. Your continued use of the site constitutes acceptance of updated terms.`
  },
  cookies: {
    title: "Cookie Policy",
    content: `We use cookies to enhance your browsing experience. Essential cookies are necessary for the site to function correctly. Performance cookies help us understand how users interact with our content. Marketing cookies are used to provide relevant advertisements. You can manage your cookie preferences at any time through your browser settings.`
  }
};
