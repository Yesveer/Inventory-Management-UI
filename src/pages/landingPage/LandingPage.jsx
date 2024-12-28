import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  FaBox,
  FaChartLine,
  FaClipboardCheck,
  FaUsersCog,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const InventoryLandingPage = () => {
  const features = [
    {
      icon: <FaBox />,
      title: "Real-time Tracking",
      description:
        "Monitor your inventory levels in real-time with advanced tracking capabilities",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics to make data-driven decisions",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Automated Reordering",
      description:
        "Smart reordering system that maintains optimal stock levels",
    },
    {
      icon: <FaUsersCog />,
      title: "Multi-user Access",
      description:
        "Collaborate with team members with role-based access control",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Operations Manager",
      company: "Tech Solutions Inc.",
      content:
        "This inventory system has transformed how we manage our warehouse operations.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      name: "Michael Chen",
      position: "Supply Chain Director",
      company: "Global Logistics",
      content:
        "The real-time tracking feature has helped us minimize stockouts significantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  ];

  const navigate = useNavigate();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            alt="Warehouse"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Manage Your Inventory Effortlessly
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200 mb-8"
            >
              Streamline your warehouse operations with our powerful inventory
              management solution
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.5 }}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-xl text-center"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Our Solution
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              We're dedicated to revolutionizing inventory management through
              innovative technology and user-centric design. Our solution helps
              businesses of all sizes optimize their operations and reduce
              costs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </motion.button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1565608087341-404b25492fee"
              alt="Warehouse Operations"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-white text-lg mb-8">
            Join thousands of businesses that trust our solution
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Request a Demo
          </motion.button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">InventoryPro</h3>
              <p className="text-gray-400">
                Making inventory management simple and efficient
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 InventoryPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InventoryLandingPage;
