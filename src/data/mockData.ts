import { Employee, LeaveRequest, PerformanceReview } from '../types';

export const employees: Employee[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Mitchell',
    email: 'sarah.mitchell@company.com',
    role: 'Software Engineer',
    department: 'Engineering',
    joinDate: '2023-01-15',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@company.com',
    role: 'Product Manager',
    department: 'Product',
    joinDate: '2022-11-03',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
  },
];

export const leaveRequests: LeaveRequest[] = [
  {
    id: '1',
    employeeId: '1',
    type: 'vacation',
    startDate: '2024-04-01',
    endDate: '2024-04-05',
    status: 'pending',
    reason: 'Family vacation',
  },
];

export const performanceReviews: PerformanceReview[] = [
  {
    id: '1',
    employeeId: '1',
    reviewerId: '2',
    date: '2024-03-01',
    rating: 4,
    feedback: 'Excellent team player with strong technical skills.',
    goals: ['Lead a major project', 'Mentor junior developers'],
  },
];