"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import DatePicker from "./DatePicker";

const BookTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    persons: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const date = formData.date.trim();

    if (!firstName || !lastName || !date) {
      toast.error("Please complete your booking details.", {
        description: "First name, last name and date are required to reserve a table.",
      });
      return;
    }

    console.log("Booking:", formData);

    toast.success("Table booking submitted!", {
      description: "We look forward to seeing you soon.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book-table" className="relative py-16 md:py-20 lg:py-24 bg-forest-800" ref={ref}>
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/restaurant-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
          {/* Left Side - Restaurant Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:scale-[1.05] lg:origin-center">
              {/* Feature dish image */}
              <div className="h-64 md:h-96 lg:h-104 bg-forest-900/40 overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1560260330-727f7f5c0277?auto=format&fit=crop&w=1200&q=80"
                  alt="Chickpea and vegetable curry served with naan"
                  loading="lazy"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest-900/40 via-transparent" />
              </div>

              {/* Floating Stats - desktop / tablet */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute top-6 left-6 md:top-8 md:left-8 bg-white rounded-xl px-4 py-2 md:px-5 md:py-3 shadow-xl hidden lg:block"
              >
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold text-forest-800 leading-tight">
                    10k+
                  </div>
                  <div className="text-[11px] md:text-xs text-gray-600 mt-1">Happy Customers</div>
                </div>
              </motion.div>
            </div>

            {/* Stats row - mobile */}
            <div className="mt-4 grid grid-cols-1 gap-3 md:hidden">
              <div className="rounded-xl bg-white/95 px-4 py-3 shadow-md text-left">
                <div className="text-lg font-bold text-forest-800 leading-tight">10k+</div>
                <div className="text-[11px] text-gray-600 mt-1">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl md:mt-6 lg:mt-10"
          >
            <p className="text-sm uppercase tracking-wider text-sage-400 font-semibold mb-2">
              Book a Table
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-4">
              Book a Table
            </h2>
            <p className="text-gray-600 mb-8">
              Reserve your spot for an unforgettable dining experience
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-2 uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-forest-800 placeholder:text-gray-400 focus:border-sage-400 focus:outline-none transition-colors"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-2 uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-forest-800 placeholder:text-gray-400 focus:border-sage-400 focus:outline-none transition-colors"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-2 uppercase">
                    Date
                  </label>
                  <DatePicker
                    value={formData.date}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        date: value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-forest-800 mb-2 uppercase">
                    Person
                  </label>
                  <select
                    name="persons"
                    value={formData.persons}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-forest-800 focus:border-sage-400 focus:outline-none transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'Persons'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-sage-400 text-forest-900 py-4 rounded-lg font-semibold text-lg hover:bg-sage-500 transition-colors shadow-lg"
              >
                Reserve Table
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
