import type { Degree as DegreeType } from '@/data/resume/degrees';

interface DegreeProps {
  data: DegreeType;
}

export default function Degree({ data }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h4
          className="degree"
          style={{
            fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
            fontWeight: 600,
          }}
        >
          {data.degree}
        </h4>
        <p className="school">
          <a href={data.link}>{data.school}</a>,{' '}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
