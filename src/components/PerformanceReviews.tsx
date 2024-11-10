import React from 'react';
import { performanceReviews, employees } from '../data/mockData';
import { Star } from 'lucide-react';

export default function PerformanceReviews() {
  const getEmployeeName = (id: string) => {
    const employee = employees.find((e) => e.id === id);
    return employee ? `${employee.firstName} ${employee.lastName}` : 'Unknown';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Performance Reviews</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          New Review
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {performanceReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">
                  {getEmployeeName(review.employeeId)}
                </h3>
                <p className="text-gray-600">
                  Reviewed by: {getEmployeeName(review.reviewerId)}
                </p>
                <p className="text-sm text-gray-500">Date: {review.date}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Feedback</h4>
                <p className="text-gray-600">{review.feedback}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Goals</h4>
                <ul className="list-disc list-inside space-y-1">
                  {review.goals.map((goal, index) => (
                    <li key={index} className="text-gray-600">
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}