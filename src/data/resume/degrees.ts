export interface Degree {
  school: string;
  degree: string;
  major: string;
  year: number | string;
  link?: string;
}

const degrees: Degree[] = [
  {
    school: 'Rutgers University, New Brunswick, NJ',
    degree: 'Master of Business & Science',
    major: 'Cybersecurity, GPA 3.83/4.0',
    year: '2024',
  },
  {
    school: 'SRM Institute of Science and Technology, India',
    degree: 'Bachelor of Technology',
    major: 'Computer Science',
    year: '2022',
  },
];

export default degrees;
