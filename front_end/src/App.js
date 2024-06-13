import './App.scss';
import { About, Footer, Header, Skills, Testimonials, Works } from './Container';
import { Navbar } from './Components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;