'use client';

import React, { useMemo, useState } from 'react';
import { skills as allSkills } from '@/data/resume/skills';

export default function Skills() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // Group skills by primary category
  const grouped = useMemo(() => {
    return allSkills.reduce((acc: Record<string, string[]>, s) => {
      const cat = s.category[0];
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(s.title);
      return acc;
    }, {});
  }, []);

  const categories = Object.keys(grouped);

  const toggle = (cat: string) => {
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className="skills">
      <div className="link-to" id="skills" />
      <div className="title">
        <h3>Skills</h3>
      </div>

      {/* 3-column grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {categories.map((cat) => {
          const items = grouped[cat];
          const firstSix = items.slice(0, 6);
          const rest = items.slice(6);

          return (
            <div key={cat}>
              <h4 style={{ marginBottom: '8px' }}>{cat}</h4>

              <ul style={{ paddingLeft: '18px', lineHeight: 1.8, margin: 0 }}>
                {firstSix.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              {rest.length > 0 && (
                <>
                  {expanded[cat] && (
                    <ul style={{ paddingLeft: '18px', marginTop: '8px', lineHeight: 1.8, marginBottom: 0 }}>
                      {rest.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => toggle(cat)}
                    style={{ marginTop: '8px', cursor: 'pointer' }}
                  >
                    {expanded[cat] ? 'Show Less' : 'Show More'}
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
