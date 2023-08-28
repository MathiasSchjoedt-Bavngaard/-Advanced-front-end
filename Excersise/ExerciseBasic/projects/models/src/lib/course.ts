export const enum CourseCode {
  AFE = 'AFE',
  AFP = 'AFP',
}

export interface Course {
  name: string;
  code: CourseCode | undefined;
  etcs: number;
}
