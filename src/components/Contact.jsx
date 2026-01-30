import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name.trim()) {
      alert("⚠️ Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      alert("⚠️ Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("⚠️ Please enter a valid email address");
      return;
    }

    if (!form.message.trim()) {
      alert("⚠️ Please enter a message");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mavra Iqbal",
          from_email: form.email,
          to_email: "mavra.iqbal@muccadam.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "✅ Thank you for reaching out! I'll get back to you as soon as possible.",
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "❌ Oops! Something went wrong. Please try again or email me directly at mavra.iqbal@muccadam.com",
          );
        },
      );
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full max-w-2xl"
      >
        <div className="mb-12">
          <p className={styles.sectionSubText}>Let's Talk</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <p className="text-secondary text-[16px] leading-[28px] mt-4">
            Have a project in mind? Feel free to reach out. I'm always
            interested in hearing about new opportunities.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <label className="flex flex-col flex-1">
              <span className="text-white font-semibold mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-accent transition-colors font-medium"
              />
            </label>
            <label className="flex flex-col flex-1">
              <span className="text-white font-semibold mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-accent transition-colors font-medium"
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-white font-semibold mb-3">Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="bg-tertiary py-3 px-5 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-accent transition-colors font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-accent text-white py-3 px-8 rounded-lg font-bold hover:bg-accent-dark transition-colors duration-300 w-fit"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
