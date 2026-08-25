import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Ana Sayfa', href: getPermalink('/tr') },
    { text: 'Uzmanlığımız', href: getPermalink('/tr/expertise') },
    { text: 'Nasıl Çalışırız', href: getPermalink('/tr/how-we-work') },
    { text: 'Ekip', href: getPermalink('/tr/team') },
    { text: 'SSS', href: getPermalink('/tr/faqs') },
  ],
  actions: [{ text: 'Bize Ulaşın', href: getPermalink('/tr/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Şirket',
      links: [
        { text: 'Ana Sayfa', href: getPermalink('/tr') },
        { text: 'Uzmanlığımız', href: getPermalink('/tr/expertise') },
        { text: 'Nasıl Çalışırız', href: getPermalink('/tr/how-we-work') },
        { text: 'Ekip', href: getPermalink('/tr/team') },
      ],
    },
    {
      title: 'Destek',
      links: [
        { text: 'SSS', href: getPermalink('/tr/faqs') },
        { text: 'İletişim', href: getPermalink('/tr/contact') },
      ],
    },
    {
      title: 'Yasal',
      links: [
        { text: 'Şartlar', href: getPermalink('/terms') },
        { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Şartlar', href: getPermalink('/terms') },
    { text: 'Gizlilik Politikası', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `© ${new Date().getFullYear()} Mia Consultancy · Tüm hakları saklıdır.`,
};
