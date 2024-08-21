import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import AuthPage from './pages/AuthPage';
import { useAuth } from './hooks/useAuth';
import LogoutButton from './components/Logout';

const App = () => {
  const user = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        {user && <LogoutButton />}
        <Routes>
          {!user ? (
            <Route path="/" element={<AuthPage />} />
          ) : (
            <>
              <Route path="/" element={<TaskList />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
