import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import FAQ from '../components/FAQ/FAQ';
import { homeFaqs } from '../data/faqData';
import { buildBreadcrumbSchema, buildOrganizationSchema } from '../utils/seo';

const Home = () => {
  useSEO({
    title: 'Home',
    description:
      'Mahakali Fabrication delivers precision metal fabrication, welding, and industrial solutions for commercial and industrial projects.',
    path: '/',
    keywords: [
      'metal fabrication',
      'industrial fabrication',
      'welding services',
      'custom fabrication',
      'Mahakali Fabrication',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        buildOrganizationSchema(),
        {
          '@type': 'WebSite',
          name: 'Mahakali Fabrication',
          url: 'https://mahakalifabrication.com/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://mahakalifabrication.com/blog?search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
        buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
        ]),
        {
          '@type': 'FAQPage',
          mainEntity: homeFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    },
  });

  return (
    <>
      <Hero />
      <Services />
      <About />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary to-orange-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us today and let's discuss how we can bring
            your fabrication project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get a Free Quote
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-medium py-3 px-8 rounded-lg transition-all duration-300">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              Latest Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              From Our Blog
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest news, trends, and insights from the
              fabrication industry.
            </p>
          </div>
          <div className="text-center">
            <Link to="/blog" className="btn-primary inline-block">
              Visit Our Blog
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
};

export default Home;
