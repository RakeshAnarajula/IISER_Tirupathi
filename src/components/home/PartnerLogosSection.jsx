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
    </section>
  );
}

export default PartnerLogosSection;

