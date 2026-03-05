import Contact from '../components/Contact/Contact';
import useSEO from '../hooks/useSEO';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../utils/seo';

const ContactPage = () => {
  useSEO({
    title: 'Contact Us',
    description:
      'Contact Mahakali Fabrication to discuss your project requirements, request a quote, and get expert support for fabrication solutions.',
    path: '/contact',
    keywords: [
      'contact fabrication company',
      'request fabrication quote',
      'metal fabrication consultation',
      'Mahakali Fabrication contact',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]),
        buildLocalBusinessSchema(),
      ],
    },
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help with your fabrication needs. Reach out to us
            and let's discuss your project.
          </p>
        </div>
      </section>

      <Contact />

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-lg">Embed your Google Maps location here</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
