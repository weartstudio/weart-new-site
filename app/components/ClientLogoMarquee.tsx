import ClientLogos from './ClientLogos';

type ClientLogoMarqueeProps = {
  /** Főoldal rólunk szekció: ac-trust · portfólió fejléc: trust-head */
  variant?: 'section' | 'page-head';
  className?: string;
  label?: string;
};

export default function ClientLogoMarquee({
  variant = 'section',
  className = '',
  label = 'Akiknek már dolgoztunk',
}: ClientLogoMarqueeProps) {
  const wrapClass = variant === 'page-head' ? 'trust trust-head' : 'ac-trust';

  return (
    <div className={[wrapClass, className].filter(Boolean).join(' ')}>
      <div className="trust-label">{label}</div>
      <div className="trust-marquee">
        <div className="trust-track">
          <ClientLogos />
          <ClientLogos />
        </div>
      </div>
    </div>
  );
}
