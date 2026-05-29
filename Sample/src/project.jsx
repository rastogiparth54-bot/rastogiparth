// App.jsx
import React from "react";
import "./App.css";
import {
  FaAngleRight,
  FaPlus,
  FaTv,
  FaIcons,
  FaUser,
} from "react-icons/fa";
import { FaCircleDown } from "react-icons/fa6";

const trendingMovies = [
  { id: 1, image: "/img01.jpeg" },
  { id: 2, image: "/img02.jpeg" },
  { id: 3, image: "/img03.jpeg" },
  { id: 4, image: "/img04.jpeg" },
  { id: 5, image: "/img05.jpeg" },
];

const faqData = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?",
];

const cards = [
  {
    title: "Enjoy on your TV",
    text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: <FaTv />,
  },
  {
    title: "Download your shows to watch offline",
    text: "Save your favourites easily and always have something to watch.",
    icon: <FaCircleDown />,
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: <FaIcons />,
  },
  {
    title: "Create profiles for kids",
    text: "Send kids on adventures with their favourite characters in a space made just for them.",
    icon: <FaUser />,
  },
];

function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="overlay"></div>

        <header className="navbar">
          <img src="/logo.jpeg" alt="Netflix Logo" className="logo" />

          <div className="nav-right">
            <select>
              <option>English</option>
            </select>

            <button className="signin-btn">Sign In</button>
          </div>
        </header>

        <div className="hero-content">
          <h1>
            Unlimited movies,
            <br />
            shows and more
          </h1>

          <p>Starts at ₹149. Cancel anytime.</p>

          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="email-box">
            <input type="email" placeholder="Email Address" />

            <button>
              Get Started <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      {/* TRENDING */}
      <section className="section">
        <h2>Trending Now</h2>

        <div className="trending">
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt="" />
              <span>{movie.id}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CARDS */}
      <section className="section">
        <h2>More reasons to join</h2>

        <div className="cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>

              <div className="icon">{card.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <span>{item}</span>
              <FaPlus />
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL SECTION */}
      <section className="bottom-email">
        <h3>
          Ready to watch? Enter your email to create or restart your
          membership.
        </h3>

        <div className="email-box">
          <input type="email" placeholder="Email Address" />

          <button>
            Get Started <FaAngleRight />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Questions? Call 000-800-919-1743</p>

        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Account</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
          </ul>

          <ul>
            <li>Privacy</li>
            <li>Corporate Information</li>
            <li>Speed Test</li>
            <li>Only on Netflix</li>
          </ul>

          <ul>
            <li>Help Centre</li>
            <li>Media Centre</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
          </ul>

          <ul>
            <li>Cookie Preferences</li>
            <li>Contact Us</li>
            <li>Legal Notices</li>
          </ul>
        </div>

        <select className="footer-select">
          <option>English</option>
        </select>

        <p className="netflix-india">Netflix India</p>
      </footer>
    </div>
  );
}

export default App;