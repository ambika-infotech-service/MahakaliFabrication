const About = () => {
  const features = [
    {
      title: 'Quality First',
      description: 'Commitment to delivering the highest quality in every project.',
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience.',
    },
    {
      title: 'Modern Equipment',
      description: 'State-of-the-art machinery for precision fabrication.',
    },
    {
      title: 'On-Time Delivery',
      description: 'Reliable service with strict adherence to deadlines.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mt-4 mb-6">
              Building Trust Through Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Mahakali Fabrication has been a trusted name in the metal fabrication industry,
              delivering innovative solutions and exceptional craftsmanship to clients across
              various sectors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our commitment to quality, precision, and customer satisfaction has made us the
              preferred choice for businesses seeking reliable fabrication services.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500">Add your company images here</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
