import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <main className="font-sans bg-butt-bg min-h-screen selection:bg-butt-orange selection:text-white-900">
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </main>
  );
}

export default App;
