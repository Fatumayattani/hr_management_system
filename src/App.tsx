import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import EmployeeList from './components/EmployeeList';
import LeaveRequests from './components/LeaveRequests';
import PerformanceReviews from './components/PerformanceReviews';

function App() {
  const [activeTab, setActiveTab] = useState('employees');

  const renderContent = () => {
    switch (activeTab) {
      case 'employees':
        return <EmployeeList />;
      case 'leave':
        return <LeaveRequests />;
      case 'performance':
        return <PerformanceReviews />;
      default:
        return <EmployeeList />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;