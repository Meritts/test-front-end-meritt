export interface Event {
  id: string;
  date: string | Date;
  limitDate: string | Date;
  createdAt: string | Date;
  limitTime?: number;
}

export interface ExamData {
  answeredItems: number;
  itemsTotal: number;
}

export type ExamType = 'SIMULATED' | 'EXAM';

export interface Exam {
  description: string;
  name: string;
  type: ExamType;
  data?: ExamData;
}

// [questionId]: answerId
export interface Answer {
  [questonId: string]: string;
}

export interface Proof {
  id: string;
  events: Event;
  exam: ExamType;
}

export interface Student {
  id: string;
  event: Event;
  exam: Exam;
  answers?: Answer;
}