'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FavoriteMenu from '@/components/FavoriteMenu';
import BookTable from '@/components/BookTable';
import About from '@/components/About';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-forest-900 text-gray-100">
      <Header />
      <Hero />
      <FavoriteMenu />
      <BookTable />
      <About />
      <Locations />
      <Contact />
      <Footer />
    </main>
  );
}
