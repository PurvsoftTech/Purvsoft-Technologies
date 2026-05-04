import { useState, useEffect, useCallback } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../css/Test.css';

// ✅ Moved outside component — static data never changes,
//    so it doesn't need to live inside (avoids re-creation on every render)
const TESTIMONIALS_DATA = [
  {
    feedback:
      "Purvsoft transformed our maid services business! Within just 3 months of running Google & Meta Ads, we started receiving 5-7 genuine leads every day. The website they designed for us is simple, fast, and gets us direct calls. Highly professional team!",
    name: "Mr. Jiten Prajapati",
    country: "JP Home Services",
    rating: 5,
  },
  {
    feedback:
      "Earlier we struggled to get inquiries online, but after partnering with Purvsoft, our visibility on social media skyrocketed. Their performance marketing campaigns gave us consistent results and helped us expand into new areas. Truly a growth partner!",
    name: "Mrs. Patel, Owner",
    country: "Baby Care at Home",
    rating: 5,
  },
  {
    feedback:
      "Purvsoft didn't just run ads, they understood our business and built a digital strategy. The leads we receive are high-quality and most convert into long-term clients. Their tracking system also helps us measure every rupee we spend. Highly recommended.",
    name: "Mr. Iyer, Director",
    country: "Elderly Care Solutions",
    rating: 5,
  },
  {
    feedback:
      "Purvsoft Technologies delivered an exceptional website that exceeded our expectations. Their team is professional, responsive, and truly cares about their clients.",
    name: "Rajesh Mehta",
    country: "CEO, TechCorp India",
    rating: 5,
  },
  {
    feedback:
      "The mobile app they developed for our business has transformed how we connect with customers. Highly recommended!",
    name: "Priya Shah",
    country: "Founder, StyleStore",
    rating: 5,
  },
];

const CARDS_PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(TESTIMONIALS_DATA.length / CARDS_PER_PAGE);

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // ✅ useCallback with [totalPages] dep — stable reference for useEffect
  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev === TOTAL_PAGES - 1 ? 0 : prev + 1));
  }, []); // TOTAL_PAGES is a module-level constant, not a reactive value

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? TOTAL_PAGES - 1 : prev - 1));
  };

  // ✅ handleNext is now stable — no ESLint warning
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const startIndex = currentPage * CARDS_PER_PAGE;
  const visibleTestimonials = TESTIMONIALS_DATA.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-badge">REAL TESTIMONIALS</span>
          <h2 className="section-title">
            What Our Clients Say
            <span className="brand-gradient"> About Us </span>
          </h2>
          <p className="testimonials-subtitle">
            Discover the voices of satisfaction: Clients speak on the excellence of our IT
            services, turning experiences into testimonials.
          </p>
        </div>

        <div className="testimonials-carousel-wrapper">
          <button type="button" className="nav-arrow prev" onClick={handlePrev}>
            <FaChevronLeft />
          </button>

          <div className="testimonials-grid">
            {visibleTestimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <p className="testimonial-feedback">"{item.feedback}"</p>

                  <div className="testimonial-rating">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} className="star-filled" />
                    ))}
                  </div>

                  <div className="testimonial-client">
                    <h3 className="client-name">{item.name}</h3>
                    <p className="client-country">{item.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button type="button" className="nav-arrow next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="testimonials-pagination">
          {[...Array(TOTAL_PAGES)].map((_, index) => (
            <button
              type="button"
              key={index}
              className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;