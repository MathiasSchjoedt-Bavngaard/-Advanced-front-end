export const enum CourseCode {
  AFE = 'AFE',
  AFP = 'AFP',
}

export interface Course {
  name: string;
  code: CourseCode | undefined;
  etcs: number;
}

export const courses: Course[] = [
  {
    name: 'Advanced Frontend',
    code: CourseCode.AFE,
    etcs: 5,
  },
  {
    name: 'Advanced Frontend Project',
    code: CourseCode.AFP,
    etcs: 10,
  },
];

export function getCourse(code: CourseCode): Course | undefined {
  return courses.find((course) => course.code === code);
}
