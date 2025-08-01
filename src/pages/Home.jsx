import React, { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80",
    title: "Welcome to CineConnect",
    subtitle: "Revolutionizing Movie Discovery & Streaming for True Cinephiles",
  },
  {
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1950&q=80",
    title: "Find Movies, Instantly",
    subtitle: "Seamless booking and streaming from the comfort of your home",
  },
  {
    image: "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1950&q=80",
    title: "Unite Theaters & OTT",
    subtitle: "Never miss out on releases with our unified platform",
  }
];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section" style={{ backgroundImage: `url('${slides[slideIndex].image}')` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>{slides[slideIndex].title}</h1>
          <p className="hero-subtitle">{slides[slideIndex].subtitle}</p>
          <div className="slide-indicators">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`indicator ${slideIndex === idx ? 'active' : ''}`}
                onClick={() => setSlideIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="content-wrapper">
        <div className="content-grid">
          <article className="content-block">
            <h2>The Problem We Solve</h2>
            <p>
              In today’s fragmented entertainment landscape, movie lovers miss out on timely releases, face subscription overload, and struggle to find content seamlessly. Piracy remains a costly challenge undermining the industry’s revenue.
            </p>
            <ul>
              <li>Viewers miss initial releases & re-screenings, especially for hit or cult films.</li>
              <li>Subscription fatigue with OTT platforms leading to poor user experience & frustration.</li>
              <li>67% of streamers find it hard to discover new content; 72% struggle with multiple subscriptions.</li>
              <li>Piracy results in billions lost every year across the film sector.</li>
            </ul>
          </article>

          <article className="content-block">
            <h2>CineConnect: The Ultimate Solution</h2>
            <p>
              CineConnect bridges theaters and streaming platforms in one elegant app, making movie discovery, booking, and streaming effortless:
            </p>
            <ul>
              <li>Unified platform aggregating local theaters and major OTT services.</li>
              <li>Seamless theater booking with real-time seat selection and mobile ticketing.</li>
              <li>One subscription, immediate access to Netflix, Prime Video, and more.</li>
              <li>Anti-piracy reporting rewards users with discounts & credits.</li>
            </ul>
          </article>
        </div>

        <div className="content-grid">
          <article className="content-block">
            <h2>Core Features & Technology</h2>
            <ul>
              <li>Real-time theater & movie availability with advanced filters.</li>
              <li>Secure online booking & payment integration.</li>
              <li>OTT content aggregation with single-app streaming.</li>
              <li>Anti-piracy programs incentivizing community vigilance.</li>
              <li>Built using React.js frontend, Node.js backend, and MongoDB Atlas database.</li>
            </ul>
          </article>
          <article className="content-block">
            <h2>How It Works</h2>
            <ol>
              <li>Discover movies playing near you or on your favorite streaming platforms.</li>
              <li>Choose between theater booking or instant streaming options.</li>
              <li>Complete payment securely via unified checkout.</li>
              <li>Enjoy your movie on the big screen or from the comfort of your home.</li>
            </ol>
          </article>
        </div>

        <div className="content-grid">
          <article className="content-block">
            <h2>Our Team & Vision</h2>
            <p>
              Founded by passionate developers Tushar & Sahil, CineConnect aims to transform cinematic experiences worldwide, leveraging cutting-edge technologies & user-centered design.
            </p>
            <ul>
              <li><strong>Phase 1 (Q2 2024):</strong> MVP launch with booking & anti-piracy reporting</li>
              <li><strong>Phase 2 (Q4 2024):</strong> OTT partnerships & AI recommendations</li>
              <li><strong>Phase 3 (Q2 2025):</strong> Mobile apps & regional language support</li>
              <li><strong>Phase 4 (Q4 2025):</strong> Blockchain-based ticketing & global expansion</li>
            </ul>
          </article>
          <article className="content-block">
            <h2>Investment Opportunity</h2>
            <p>
              Tapping into a $50B+ market, CineConnect combines multiple revenue streams from ticketing, subscriptions, and targeted advertising through a scalable, modular architecture.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
