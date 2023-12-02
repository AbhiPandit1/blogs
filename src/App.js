import './App.css';
import Articles from './Component/Articles/Articles';
import Navbar from './Component/Navbar/Navbar';
import Landing from './Component/Pages/Landing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Articles />
    </div>
  );
}

export default App;
