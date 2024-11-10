export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  joinDate: string;
  avatar?: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  type: 'vacation' | 'sick' | 'personal';
  startDate: string;
  endDate: string;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  reviewerId: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  feedback: string;
  goals: string[];
}