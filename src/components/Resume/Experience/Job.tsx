import dayjs from 'dayjs';

import type { Position } from '@/data/resume/work';

import JobSummary from './JobSummary';

interface JobProps {
  data: Position;
}

export default function Job({ data }: JobProps) {
  const { name, position, url, startDate, endDate, summary, highlights } = data;

  return (
    <div>
      <header>
        <h4
          style={{
            fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
            fontWeight: 600,
            fontSize: '20px',
            letterSpacing: '0.5px',
          }}
        >
          <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
            {name}
          </a>{' '}
          - {position}
        </h4>
        <p className="daterange">
          {' '}
          <time dateTime={startDate}>
            {dayjs(startDate).format('MMMM YYYY')}
          </time>{' '}
          -{' '}
          {endDate && endDate.toLowerCase() !== 'present' ? (
            <time dateTime={endDate}>{dayjs(endDate).format('MMMM YYYY')}</time>
          ) : (
            'Present'
          )}
        </p>
      </header>
      {summary ? <JobSummary summary={summary} /> : null}
      {highlights ? (
        <ul
          className="points"
          style={{
            paddingLeft: '22px',
            marginTop: '10px',
            listStyleType: 'disc',
            listStylePosition: 'outside',
          }}
        >
          {highlights.map((highlight) => (
            <li key={highlight} style={{ marginBottom: '8px', display: 'list-item' }}>
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
