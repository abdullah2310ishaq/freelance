import React from 'react';

export const OfficeMap: React.FC = () => {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.405387405291!2d-113.45571362325997!3d53.44008577221379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x538f1eb3abd53589%3A0x1931ab24924138ce!2s7618%2010%20Ave%20NW%2C%20Edmonton%2C%20AB%20T6K%202T6%2C%20Canada!5e0!3m2!1sen!2s!4v1716500000000!5m2!1sen!2s';

  return (
    <section className="relative w-full overflow-hidden">
      <iframe
        title="Analytic Alliance CPA Office Location"
        src={mapEmbedUrl}
        className="block w-full h-[42vw] min-h-[280px] max-h-[520px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default OfficeMap;
