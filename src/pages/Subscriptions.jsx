import React, { useEffect, useState, useRef } from "react";
import "./Subscriptions.css";
import thorVideo from "./thor.mp4";


const subscriptionCombos = [
  {
    id: 1,
    name: "Netflix + Prime",
    platforms: ["netflix", "prime"],
    price: 599,
    originalPrice: 799,
    logoUrls: {
      netflix:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      prime:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    },
  },
  {
    id: 2,
    name: "Netflix + Jio Hotstar",
    platforms: ["netflix", "jiohotstar"],
    price: 649,
    originalPrice: 899,
    logoUrls: {
      netflix:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      jiohotstar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Disney%2B_Hotstar_logo.svg/1200px-Disney%2B_Hotstar_logo.svg.png",
    },
  },
  {
    id: 3,
    name: "Prime + Crunchyroll",
    platforms: ["prime", "crunchyroll"],
    price: 499,
    originalPrice: 699,
    logoUrls: {
      prime:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
      crunchyroll:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Crunchyroll_logo.svg",
    },
  },
  {
    id: 4,
    name: "Apple TV+ Only",
    platforms: ["appletv"],
    price: 299,
    originalPrice: 299,
    logoUrls: {
      appletv:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
  },
  {
    id: 5,
    name: "YouTube Premium + Jio Hotstar",
    platforms: ["youtubepremium", "jiohotstar"],
    price: 699,
    originalPrice: 899,
    logoUrls: {
      youtubepremium:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
      jiohotstar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Disney%2B_Hotstar_logo.svg/1200px-Disney%2B_Hotstar_logo.svg.png",
    },
  },
  {
    id: 6,
    name: "All-Inclusive Combo",
    platforms: [
      "netflix",
      "prime",
      "jiohotstar",
      "crunchyroll",
      "appletv",
      "youtubepremium",
    ],
    price: 1799,
    originalPrice: 2395,
    logoUrls: {
      netflix:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      prime:
        "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
      jiohotstar:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Disney%2B_Hotstar_logo.svg/1200px-Disney%2B_Hotstar_logo.svg.png",
      crunchyroll:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Crunchyroll_logo.svg",
      appletv:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      youtubepremium:
        "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
    },
  },
];

const Subscriptions = () => {
  const [showCombos, setShowCombos] = useState(false);
  const combosRef = useRef(null);

  // Detect scroll to show combos section
  useEffect(() => {
    const handleScroll = () => {
      if (!combosRef.current) return;
      const combosTop = combosRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      // Show combos when user scrolls down enough (e.g. combos section is 200px within viewport)
      if (combosTop < windowHeight - 200) {
        setShowCombos(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="subs-root">
      {/* Sci-fi gif banner */}
    <section className="sci-fi-banner" aria-label="Sci-fi movie animation">
  <video
    className="sci-fi-gif"
    autoPlay
    loop
    muted
    playsInline
    poster="https://your-poster-image-url.jpg"
  >
    <source src={thorVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="banner-overlay">
    <h1 className="subs-title">Subscription Combos Await</h1>
    <p className="subs-desc">
      Scroll down to explore best OTT subscription bundles!
    </p>
  </div>
</section>


      {/* Subscription combos section */}
      <section
        className={`combo-section ${showCombos ? "visible" : "hidden"}`}
        ref={combosRef}
        aria-label="Available subscription combos"
      >
        <h2 className="section-title">Available Subscription Combos</h2>
        <div className="combo-grid">
          {subscriptionCombos.map((combo) => {
            const discountPercent = Math.round(
              100 - (combo.price / combo.originalPrice) * 100
            );
            return (
              <div key={combo.id} className="combo-card">
                <h3 className="combo-name">{combo.name}</h3>
                <div className="platform-logos">
                  {combo.platforms.map((platform) => (
                    <img
                      key={platform}
                      src={combo.logoUrls[platform]}
                      alt={`${platform} logo`}
                      className="platform-logo"
                      loading="lazy"
                    />
                  ))}
                </div>
                <p className="combo-price">
                  <span className="price-current">₹{combo.price}</span>{" "}
                  <span className="price-original">₹{combo.originalPrice}</span>{" "}
                  <span className="price-discount">({discountPercent}% off)</span>
                </p>
                <button
                  className="purchase-btn"
                  aria-label={`Purchase ${combo.name} subscription combo`}
                  onClick={() => alert(`Purchased subscription: ${combo.name}`)}
                >
                  Purchase
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Subscriptions;
