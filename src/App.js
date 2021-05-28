import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
