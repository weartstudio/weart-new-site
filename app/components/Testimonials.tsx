import type { ReactNode } from 'react';

export default function Testimonials({
  quote,
  name,
  role,
  stat,
  variant = 'light',
}: {
  quote: ReactNode;
  name: string;
  role: string;
  stat?: ReactNode;
  variant?: 'light' | 'dark';
}) {
  return (
    <figure className={`duo-quote duo-quote--${variant} reveal`}>
      <span className="dq-mark" aria-hidden="true">&rdquo;</span>
      <blockquote className="dq-text">{quote}</blockquote>
      <figcaption className="dq-foot">
        <span className="dq-who">
          <b>{name}</b>
          <span>{role}</span>
        </span>
        {stat ? <span className="dq-stat">{stat}</span> : null}
      </figcaption>
    </figure>
  );
}
