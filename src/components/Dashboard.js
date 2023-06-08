import React from 'react';

function Dashboard({ setLoggedIn }) {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div id="dashboardPage">
      <h1 id="dashboard-tag">Welcome to Dashboard</h1>
      <button id="dashboard-logout" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Dashboard;