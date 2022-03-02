import './App.css';
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      < Header />
      < About />
      < Portfolio />
      < Skills />
      < Footer />
    </div>
  );
}

export default App;
