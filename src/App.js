import Header from '../src/components/Header';
import Tasks from './components/Tasks';
const App = () => {
  return (
    <div className="container">
      <Header /> {/* No need to pass props; it will use defaultProps */}
      <Tasks />
    </div>
  );
};

export default App;