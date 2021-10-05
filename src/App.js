
import './App.css';
import Header from './components/Header'; 
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="row">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
