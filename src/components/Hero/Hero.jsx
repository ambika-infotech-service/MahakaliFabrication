import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
                Premium Metal Fabrication
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Crafting Excellence in
              <span className="text-secondary"> Metal Fabrication</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Transforming your vision into reality with precision engineering,
              innovative designs, and unmatched quality. Your trusted partner for
              all fabrication needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="btn-primary text-center">
                Get Started
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div>
                <div className="text-4xl font-bold text-secondary">500+</div>
                <div className="text-gray-400 text-sm mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary">15+</div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary">98%</div>
                <div className="text-gray-400 text-sm mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-32 h-32 mx-auto mb-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="text-gray-300 text-lg">
                  Replace with high-quality fabrication images
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full blur-2xl opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 74C120 68 240 56 360 50C480 44 600 44 720 48C840 52 960 60 1080 62C1200 64 1320 60 1380 58L1440 56V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
