// Sötét hero — űr-témájú háttér (ködfoltok, csillagok, pályák, bolygó).
type HeroAtmosphereProps = {
  showPlanet?: boolean;
};

export default function HeroAtmosphere({ showPlanet = true }: HeroAtmosphereProps) {
  return (
    <div className="hero-atmo" aria-hidden="true">
      <div className="hero-atmo-nebula hero-atmo-nebula--1" />
      <div className="hero-atmo-nebula hero-atmo-nebula--2" />
      <div className="hero-atmo-nebula hero-atmo-nebula--3" />

      <div className="hero-atmo-stars">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <svg className="hero-atmo-orbits" viewBox="0 0 1200 600" fill="none" aria-hidden="true">
        {showPlanet && (
          <ellipse
            className="hero-atmo-orbit-path"
            cx="860"
            cy="270"
            rx="200"
            ry="108"
            transform="rotate(-16 860 270)"
            stroke="url(#heroOrbitGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 16"
          />
        )}
        <ellipse
          className="hero-atmo-orbit-path hero-atmo-orbit-path--b"
          cx="340"
          cy="340"
          rx="240"
          ry="132"
          transform="rotate(14 340 340)"
          stroke="url(#heroOrbitGradB)"
          strokeWidth="1"
          strokeDasharray="3 14"
        />
        <ellipse
          className="hero-atmo-orbit-path hero-atmo-orbit-path--c"
          cx="620"
          cy="180"
          rx="160"
          ry="88"
          transform="rotate(-8 620 180)"
          stroke="url(#heroOrbitGradB)"
          strokeWidth="1"
          strokeDasharray="2 12"
          opacity="0.55"
        />
        <defs>
          <linearGradient id="heroOrbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(98,133,216,0)" />
            <stop offset="35%" stopColor="rgba(98,133,216,0.4)" />
            <stop offset="65%" stopColor="rgba(59,143,232,0.32)" />
            <stop offset="100%" stopColor="rgba(98,133,216,0)" />
          </linearGradient>
          <linearGradient id="heroOrbitGradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(192,206,245,0)" />
            <stop offset="50%" stopColor="rgba(192,206,245,0.26)" />
            <stop offset="100%" stopColor="rgba(192,206,245,0)" />
          </linearGradient>
        </defs>
      </svg>

      {showPlanet && (
        <div className="hero-atmo-sat-orbit">
          <span className="hero-atmo-sat" />
        </div>
      )}

      {showPlanet && (
        <div className="hero-atmo-planet">
          <span className="hero-atmo-planet-body" />
          <span className="hero-atmo-planet-ring" />
        </div>
      )}

      <div className="hero-atmo-sheen" />
    </div>
  );
}
