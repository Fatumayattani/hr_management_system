import React from 'react';
import { employees } from '../data/mockData';
import { Mail, Phone, Building } from 'lucide-react';

export default function EmployeeList() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Employee Directory</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Employee
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={employee.avatar}
                alt={`${employee.firstName} ${employee.lastName}`}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {employee.firstName} {employee.lastName}
                </h3>
                <p className="text-gray-600">{employee.role}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>{employee.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Building className="h-4 w-4" />
                <span>{employee.department}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-sm">Joined: {employee.joinDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}