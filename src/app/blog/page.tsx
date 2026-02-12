"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stories = [
  {
    id: 1,
    category: "Kitchen Notes",
    title: "5 chef tips to make your weeknight dinners feel special",
    imageSrc:
      'https://images.unsplash.com/photo-1560260330-727f7f5c0277?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Chickpea and vegetable curry in a brass kadai',
  },
  {
    id: 2,
    category: "Behind the Pass",
    title: "How we build our seasonal tasting menu",
    imageSrc:
      'https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Masala dosa with sambar and chutney on a banana leaf',
  },
  {
    id: 3,
    category: "Field to Fork",
    title: "Why sourcing local produce changes the way food tastes",
    imageSrc:
      'https://images.unsplash.com/photo-1757715376287-90f24dac4593?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Paneer tikka garnished with herbs',
  },
  {
    id: 4,
    category: "Pairings",
    title: "Choosing the right drink for your favourite curries",
    imageSrc:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Paneer butter masala with rice',
  },
  {
    id: 5,
    category: "Service",
    title: "Designing a dining room that feels warm, not formal",
    imageSrc:
      "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Vegetarian Indian thali with rice, curries, and sweets on a silver plate",
  },
  {
    id: 6,
    category: "Sweet Things",
    title: "Building desserts that are balanced, not too sweet",
    imageSrc:
      'https://images.unsplash.com/photo-1769434128978-5bdcb5c7ee2a?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Slice of chocolate cake topped with berries and mint on a plate',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-forest-900">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sage-400 mb-3">
              Journal
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Mumbai Masala Stories
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Long-form notes from the kitchen, the bar, and the farms we work with. Settle in and
              have a read.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                {/* Image area */}
                <div className="flex h-40 items-center justify-center bg-linear-to-br from-sage-100 via-white to-emerald-50">
                  <div className="relative h-20 w-20 rounded-full bg-white shadow-md overflow-hidden">
                    <Image
                      src={story.imageSrc}
                      alt={story.imageAlt}
                      fill
                      sizes="80px"
                      priority={index === 0}
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col px-5 py-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-500 mb-2">
                    {story.category}
                  </p>
                  <h2 className="text-base md:text-lg font-semibold mb-3 text-forest-900 group-hover:text-sage-700">
                    {story.title}
                  </h2>
                  <p className="mt-auto text-xs text-gray-500">
                    4 min read · Updated this week
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

