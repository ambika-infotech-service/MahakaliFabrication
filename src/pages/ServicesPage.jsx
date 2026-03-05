import Services from '../components/Services/Services';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const ServicesPage = () => {
  useSEO({
    title: 'Services',
    description:
      'Explore our full range of metal fabrication services, including welding, custom design, industrial solutions, and project installation.',
    path: '/services',
    keywords: [
      'fabrication services',
      'welding solutions',
      'custom metal design',
      'industrial metal works',
    ],
  });

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fabrication solutions tailored to meet your specific
            needs with precision and excellence.
          </p>
        </div>
      </section>

      <Services />

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              A streamlined approach from concept to completion ensures your
              project is delivered on time and to specification.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your requirements, budget, and timeline to understand your vision.',
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Our experts create detailed designs and project plans for your approval.',
              },
              {
                step: '03',
                title: 'Fabrication',
                description: 'Skilled craftsmen bring designs to life using state-of-the-art equipment.',
              },
              {
                step: '04',
                title: 'Delivery & Installation',
                description: 'We ensure safe delivery and professional installation at your location.',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-secondary">{item.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-secondary/20"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-secondary to-orange-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss how we can create a
              tailored solution for your specific needs.
            </p>
            <Link to="/contact" className="bg-white text-secondary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
