import React from 'react';

export function PartnerLogosSection() {
  const logos = [
    { src: "/image_1.png", alt: "Veekshana IISER Tirupati" },
    { src: "/image_2.png", alt: "AMOST IIT-IISER Tirupati" },
    { src: "/image_3.png", alt: "AAMOS 2020 IIT Tirupati IISER Tirupati" },
    { src: "/image_4.png", alt: "I-STEM Facilitating Innovation and Research" }
  ];

  return (
    <section className="partner-logos-strip" aria-label="Institutional Affiliations and Partners">
      <div className="site-container">
        <div className="partner-logos-row">
          {logos.map((logo, idx) => (
            <div key={idx} className="partner-logo-item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="partner-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .partner-logos-strip {
          background-color: #FFFFFF;
          padding: 48px 0;
          border-top: 1px solid #E2E8F0;
        }

        .partner-logos-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .partner-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          transition: transform 0.2s ease;
        }

        .partner-logo-item:hover {
          transform: scale(1.05);
        }

        .partner-logo-img {
          max-height: 105px;
          max-width: 160px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .partner-logos-row {
            gap: 24px;
          }
          .partner-logo-img {
            max-height: 75px;
            max-width: 120px;
          }
        }
      `}</style>
    </section>
  );
}

export default PartnerLogosSection;
