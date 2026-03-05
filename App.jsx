import React, { useState, useEffect } from "react";
import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";

function App() {
  const slides = [food1, food2, food3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hero Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans scroll-smooth">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-gray-900 text-white px-6 md:px-10 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            Mealswala
          </h1>

          <ul className="hidden md:flex gap-8 items-center">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#meals" className="hover:text-orange-400">Meals</a></li>
            <li><a href="#events" className="hover:text-orange-400">Events</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            <a href="#contact">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 rounded-full hover:scale-105 transition">
                Order Now
              </button>
            </a>
          </ul>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-center bg-gray-800 py-6 rounded-xl">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#meals" onClick={() => setMenuOpen(false)}>Meals</a>
            <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-white text-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Taste The Celebration
          </h1>
          <p className="text-base md:text-xl mb-8">
            Fresh Food • Event Catering • Premium Service
          </p>
        </div>
      </section>

      {/* ================= MEALS ================= */}
      <MealsSection />

      {/* ================= EVENTS ================= */}
      <EventsSlider />

      {/* ================= WHY CHOOSE ================= */}
      <WhyChoose />

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-14 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6 text-orange-400">
          Contact Us
        </h2>
        <p>📍 Hyderabad, India</p>
        <p>📞 +91 9876543210</p>
        <p>📧 mealswala@email.com</p>
      </section>

      <footer className="bg-gray-950 text-gray-400 text-center py-5">
        © 2026 Mealswala. All Rights Reserved.
      </footer>
    </div>
  );
}

/* ================= MEALS ================= */
function MealsSection() {
  const [category, setCategory] = useState("veg");

  const meals = {
    veg: [
      { 
        name: "Paneer Butter Masala", 
        price: "₹179", 
        img: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg" 
      },
      { 
        name: "Pav Bhaji", 
        price: "₹149", 
        img: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg" 
      },
      { 
        name: "Masala Dosa", 
        price: "₹99", 
        img: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg" 
      },
    ],

    nonveg: [
      { 
        name: "Chicken Biryani", 
        price: "₹199", 
        img: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg" 
      },
      { 
        name: "Grilled Chicken", 
        price: "₹249", 
        img: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg" 
      },
      { 
        name: "Chicken noodles", 
        price: "₹150", 
        img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" 
      },
    ],
  };

  return (
    <section id="meals" className="py-20 bg-orange-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        Our Popular Meals
      </h2>

      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setCategory("veg")}
          className={`px-6 py-2 rounded-full ${
            category === "veg" ? "bg-green-600 text-white" : "bg-white shadow"
          }`}
        >
          Veg
        </button>

        <button
          onClick={() => setCategory("nonveg")}
          className={`px-6 py-2 rounded-full ${
            category === "nonveg" ? "bg-red-600 text-white" : "bg-white shadow"
          }`}
        >
          Non-Veg
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {meals[category].map((meal, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition"
          >
            <img
              src={meal.img}
              alt={meal.name}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-lg">{meal.name}</h3>
              <p className="text-orange-600 font-bold mt-2">
                {meal.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= EVENTS SLIDER ================= */
function EventsSlider() {
  const events = [
    { name: "Corporate Events", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df" },
    { name: "Weddings", img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486" },
    { name: "Birthday Parties", img: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84" },
    { name: "College Events", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644" },
    { name: "Engagement Ceremonies", img: "https://images.unsplash.com/photo-1519741497674-611481863552" },
    { name: "Social Events", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" },
    { name: "House Warming Events", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { name: "Outdoor Events", img: "https://images.unsplash.com/photo-1505238680356-667803448bb6" },
    { name: "House Party", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" },  // ✅ Added
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < events.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section id="events" className="py-20 bg-white text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        We Organize Events
      </h2>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {events.map((event, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[33.33%] px-4"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.name}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-orange-600">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
        >
          ▶
        </button>

      </div>
    </section>
  );
}

/* ================= WHY CHOOSE ================= */
function WhyChoose() {
  const features = [
    { icon: "🥗", title: "Fresh Ingredients", desc: "Premium farm-fresh ingredients in every dish." },
    { icon: "💰", title: "Affordable Pricing", desc: "Luxury taste at reasonable prices." },
    { icon: "👨‍🍳", title: "Expert Chefs", desc: "Experienced chefs delivering authentic flavors." },
    { icon: "🚚", title: "On-Time Delivery", desc: "Timely catering for every event." },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-orange-400">
        Why Choose Mealswala?
      </h2>

      <div className="flex flex-wrap justify-center gap-10 px-6">
        {features.map((item, i) => (
          <div key={i} className="w-72 bg-white/10 p-8 rounded-2xl hover:scale-105 transition">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;