export interface Degree {
  school: string;
  degree: string;
  major: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Rutgers, The State University of New Jersey',
    degree: 'Masters of Business and Science',
    major: 'Computer and Information Science (Cybersecurity)',
    year: '2024',
  },
  {
    school: 'SRM Institute of Science and Technology',
    degree: 'Bachelor of Technology (B.Tech)',
    major: 'Computer Science and Engineering',
    year: '2022',
  },
];

export default degrees;
