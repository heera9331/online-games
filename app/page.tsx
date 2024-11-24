import Header from './components/Header';
import Hero from './components/Hero';
import PopularGames from './components/PopularGames';
import FeaturedGames from './components/FeaturedGames';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <PopularGames />
        <FeaturedGames />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}