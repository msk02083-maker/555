import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import About from '../components/About';
import Bakery from '../components/Bakery';
import MenuList from '../components/Menu';
import Reservation from '../components/Reservation';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-['Noto_Sans_KR']">
      <Header />
      <main>
        <Hero />
        <Bakery />
        <Intro />
        <About />
        <MenuList />
        <Reservation />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
