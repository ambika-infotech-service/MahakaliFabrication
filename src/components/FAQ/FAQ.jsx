import { homeFaqs } from '../../data/faqData';

const FAQ = () => {
  return (
    <section className="section-padding bg-gray-50" aria-labelledby="faq-title">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
              FAQs
            </span>
            <h2 id="faq-title" className="mt-3 text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Quick answers to common fabrication and project planning questions.
            </p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-secondary transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
