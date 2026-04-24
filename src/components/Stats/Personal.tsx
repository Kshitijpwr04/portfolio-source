'use client';

export default function Publications() {
  const publications = [
    {
      title: 'Exploitation Analysis of Buffer Overflow in SL-Mail Server',
      description: 'Designed and implemented a threat analytics and automated response system using SIEM and SOAR concepts with Google SecOps.',
      link: 'https://ieeexplore.ieee.org/abstract/document/9640767',
      image: '/images/pub1.png'
    },
    {
      title: 'Analysis of taxi dataset to categorize city rankings',
      description: 'Built a multi-cloud IAM automation framework using Terraform with role-based access control and policy enforcement.',
      link: 'https://sciencescholar.us/journal/index.php/ijhs/article/view/6649',
      image: '/images/pub2.png'
    },
    {
      title: 'IoT Hacking: Cybersecurity Point of View',
      description: 'Implemented Zero Trust principles across identity, endpoint, and network layers using Microsoft security stack.',
      link: 'https://books.aijr.org/index.php/press/catalog/book/90/chapter/326',
      image: '/images/pub3.png'
    }
  ];

  return (
    <article style={{ width: '70vw', marginLeft: 'calc(45% - 30vw)', padding: '4px', fontFamily: 'Courier New, Courier, monospace' }}>
      <h1 style={{ marginBottom: '30px', fontSize: '24px', fontFamily: 'Courier New, Courier, monospace' }}>Publications</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
        }}
      >
        {publications.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ width: '100%' }}>
              <img
                src={item.image}
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
              <h2 style={{ marginTop: '15px', fontSize: '18px', fontFamily: 'Courier New, Courier, monospace' }}>
                {item.title}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
