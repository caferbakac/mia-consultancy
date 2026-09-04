import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Our Story', href: getPermalink('/our-story') },
    { text: 'Core Competencies', href: getPermalink('/expertise') },
    { text: 'How We Work', href: getPermalink('/how-we-work') },
    { text: 'Team', href: getPermalink('/team') },
    { text: 'FAQs', href: getPermalink('/faqs') },
  ],
  actions: [{ text: 'Contact us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Our Story', href: getPermalink('/our-story') },
        { text: 'Core Competencies', href: getPermalink('/expertise') },
        { text: 'How We Work', href: getPermalink('/how-we-work') },
        { text: 'Team', href: getPermalink('/team') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQs', href: getPermalink('/faqs') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' }],
  footNote: `© ${new Date().getFullYear()} Mia Consultancy · All rights reserved.`,
};
