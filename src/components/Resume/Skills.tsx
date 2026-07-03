'use client';

import React, { useMemo, useState } from 'react';
import { skills as allSkills } from '@/data/resume/skills';

type SkillsProps = {
  skills: any[];
  categories: { name: string }[];
};

export default function Skills({ skills, categories }: SkillsProps) {
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

  const categoryKeys = Object.keys(grouped);

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
        {categoryKeys.map((cat) => {
          const items = grouped[cat];
          const firstSix = items.slice(0, 6);
          const rest = items.slice(6);

          return (
            <div key={cat}>
              <h4 style={{ marginBottom: '8px' }}>{cat}</h4>

              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  padding: 0,
                  margin: 0,
                  listStyle: 'none'
                }}
              >
                {firstSix.map((skill: string, i: number) => (
                  <li key={i} style={{ marginBottom: '2px' }}>{skill}</li>
                ))}
              </ul>

              {rest.length > 0 && (
                <>
                  {expanded[cat] && (
                    <ul
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        padding: 0,
                        marginTop: '8px',
                        listStyle: 'none'
                      }}
                    >
                      {rest.map((skill: string, i: number) => (
                        <li key={i} style={{ marginBottom: '2px' }}>{skill}</li>
                      ))}
                    </ul>
                  )}

                  <button
                    onClick={() => toggle(cat)}
                    style={{
                      marginTop: '8px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      padding: '4px 10px',
                      border: '1px solid #c9a96a',
                      borderRadius: '6px',
                      background: 'transparent'
                    }}
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
