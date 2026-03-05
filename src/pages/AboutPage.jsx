import About from '../components/About/About';

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About Mahakali Fabrication
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in metal fabrication, delivering excellence
            through innovation and craftsmanship.
          </p>
        </div>
      </section>

      <About />

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional metal fabrication services that exceed our clients'
                expectations through innovation, precision, and unwavering commitment to quality.
                We strive to be the industry leader in delivering customized solutions that
                drive our clients' success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the most trusted and innovative metal fabrication company,
                setting new standards for quality and service excellence. We envision a future
                where our craftsmanship and expertise enable businesses to achieve their goals
                through superior fabrication solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-lg">
              We combine experience, technology, and dedication to deliver
              unmatched fabrication services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Certified Expertise',
                description: 'Our team holds industry certifications and brings years of specialized experience.',
              },
              {
                title: 'Advanced Technology',
                description: 'We utilize cutting-edge equipment and modern fabrication techniques.',
              },
              {
                title: 'Customer-Centric',
                description: 'Your satisfaction is our priority, from consultation to project completion.',
              },
              {
                title: 'Competitive Pricing',
                description: 'Quality service at fair prices that fit your budget.',
              },
              {
                title: 'Timely Delivery',
                description: 'We respect deadlines and ensure on-time project completion.',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous quality checks at every stage of the fabrication process.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
