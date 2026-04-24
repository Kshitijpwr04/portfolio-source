import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

export default function ContactIcons() {
  return (
    <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a
            href={s.link}
            aria-label={`${s.label} (opens in new tab)`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {typeof s.icon === 'string' ? (
              <img
                src={s.icon}
                alt={s.label}
                className="size-5"
                style={{
                  filter: s.label === 'Google Scholar'
                    ? 'grayscale(100%) opacity(0.7)'
                    : 'grayscale(100%) opacity(0.7)',
                }}
              />
            ) : (
              <FontAwesomeIcon icon={s.icon} className="size-5" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
