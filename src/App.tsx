import { useAuth } from './contexts/AuthContext';
import { Auth } from './components/Auth';
import { TodoList } from './components/TodoList';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  return user ? <TodoList /> : <Auth />;
}

export default App;
