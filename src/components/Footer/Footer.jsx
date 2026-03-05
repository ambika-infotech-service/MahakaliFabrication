import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Metal Fabrication', path: '/services' },
      { name: 'Welding Services', path: '/services' },
      { name: 'Custom Design', path: '/services' },
      { name: 'Industrial Solutions', path: '/services' },
    ],
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MF</span>
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Mahakali Fabrication
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Excellence in metal fabrication and industrial solutions.
              Delivering quality craftsmanship since establishment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-1 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Your City, State, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@mahakalifabrication.com" className="hover:text-secondary transition-colors">
                  info@mahakalifabrication.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; {currentYear} Mahakali Fabrication. All rights reserved.</p>
          <p className="mt-2 text-gray-200">
            Designed and developed by{' '}
            <a
              href="https://ambikainfotech.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-secondary underline-offset-2 hover:text-secondary transition-colors"
            >
              Ambika Infotech
            </a>
          </p>
        </div>
        </div>
      </footer>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-fixed grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <svg className="h-7 w-7" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.004 0C3.64 0 .088 3.552.087 7.916a7.9 7.9 0 0 0 1.246 4.25L0 16l3.95-1.31a7.94 7.94 0 0 0 4.053 1.106h.003c4.363 0 7.916-3.552 7.917-7.916a7.86 7.86 0 0 0-2.322-5.554zM8.006 14.44h-.003a6.6 6.6 0 0 1-3.366-.92l-.242-.145-2.345.777.765-2.286-.158-.236a6.59 6.59 0 0 1-1.013-3.53c.002-3.638 2.962-6.598 6.6-6.598a6.56 6.56 0 0 1 4.668 1.932A6.56 6.56 0 0 1 14.845 8c-.001 3.638-2.962 6.44-6.84 6.44zm3.615-4.95c-.198-.099-1.17-.578-1.353-.644-.182-.066-.315-.099-.447.099-.132.197-.513.644-.628.776-.116.132-.23.148-.43.05-.197-.1-.833-.307-1.587-.98-.586-.522-.982-1.167-1.098-1.364-.115-.198-.012-.304.087-.402.09-.09.198-.23.297-.346.099-.115.132-.197.198-.33.066-.132.033-.247-.017-.346-.05-.1-.446-1.074-.61-1.47-.16-.387-.323-.335-.446-.341a8.7 8.7 0 0 0-.38-.006c-.132 0-.347.05-.528.247-.182.198-.694.678-.694 1.653 0 .975.71 1.916.81 2.05.098.132 1.398 2.134 3.386 2.992.473.204.843.326 1.131.417.476.151.908.13 1.25.079.381-.057 1.17-.479 1.336-.941.165-.463.165-.859.116-.942-.05-.082-.182-.132-.38-.23z" />
        </svg>
      </a>
    </>
  );
};

export default Footer;
