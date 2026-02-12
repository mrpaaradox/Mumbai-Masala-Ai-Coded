"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const errors: string[] = [];

    if (!trimmedName) {
      errors.push("name");
    } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      errors.push("a name with letters only");
    }
    if (!trimmedEmail) {
      errors.push("email");
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.push("a valid email");
    }
    if (!trimmedMessage) errors.push("message");

    if (errors.length) {
      toast.error("Please complete the contact form.", {
        description: `We still need ${errors.join(", ")}.`,
      });
      return;
    }

    // In a real app you would POST the message here.
    toast.success("Message sent to Mumbai Masala!", {
      description: "Our team will get back to you as soon as possible.",
    });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 mb-4">
              Plan your visit to Mumbai Masala
            </h2>
            <p className="text-black mb-6 max-w-md">
              Reserve a table, ask about private dining, or tell us about any special requests. Our
              team in Mumbai will get back to you as soon as possible.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold text-forest-900">Phone:</span> +91 22 1234 5678
              </p>
              <p>
                <span className="font-semibold text-forest-900">Email:</span> hello@mumbaimasala.in
              </p>
              <p>
                <span className="font-semibold text-forest-900">Address:</span> Mumbai Masala, Linking Road, Bandra
                West, Mumbai, Maharashtra 400050
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            noValidate
            className="w-full max-w-xl rounded-2xl bg-white p-6 md:p-8 shadow-xl border border-gray-100 space-y-4 mx-auto md:ml-auto"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-black mb-2 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm text-forest-900 placeholder:text-gray-400 focus:border-sage-400 focus:outline-none"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-black mb-2 uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm text-forest-900 placeholder:text-gray-400 focus:border-sage-400 focus:outline-none"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-black mb-2 uppercase">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm text-forest-900 placeholder:text-gray-400 focus:border-sage-400 focus:outline-none resize-none"
                placeholder="Tell us about your visit, occasion, or question…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-lg bg-sage-400 py-3 text-sm font-semibold text-forest-900 hover:bg-sage-500 transition-colors"
            >
              Send message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

