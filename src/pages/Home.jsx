import { useState, useEffect } from "react";
import Timeline from "./Timeline";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";
import Footer from "./Footer";
import "../styles/pages/Home.css";

const Home = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [coverFinished, setCoverFinished] = useState(false);
  const [coverCompleted, setHeroCompleted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [lotusAtTop, setLotusAtTop] = useState(false);
  const [lotusSpin, setLotusSpin] = useState(false);
  const [lotusFixed, setLotusFixed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);

          setTimeout(() => {
            setCoverFinished(true);
            setLotusAtTop(true);
          }, 800);

          return 100;
        }

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleHeroComplete = () => {
    setHeroCompleted(true);
    setLotusAtTop(false);
    setLotusSpin(true);

    setTimeout(() => {
      setLotusFixed(true);
    }, 1000);

    setTimeout(() => {
      setIsClosing(true);
    }, 1500);
  };

  return (
    <div className="home-container">
      {!isLoaded && (
        <div className="bw-loader">
          <div className="progress-ring">
            <svg className="progress-ring-svg" width="320" height="320">
              <circle
                className="progress-ring-bg"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
                fill="transparent"
                r="150"
                cx="160"
                cy="160"
              />
              <circle
                className="progress-ring-circle"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="3"
                fill="transparent"
                r="150"
                cx="160"
                cy="160"
                style={{
                  strokeDasharray: `${2 * Math.PI * 150}`,
                  strokeDashoffset: `${2 * Math.PI * 150 * (1 - progress / 100)}`,
                }}
              />
            </svg>
          </div>
          <div className="lotus-container">
            <div className="lotus">
              {/* Outer layer */}
              <div className="petal petal-outer petal-outer-1"></div>
              <div className="petal petal-outer petal-outer-2"></div>
              <div className="petal petal-outer petal-outer-3"></div>
              <div className="petal petal-outer petal-outer-4"></div>
              <div className="petal petal-outer petal-outer-5"></div>
              <div className="petal petal-outer petal-outer-6"></div>
              <div className="petal petal-outer petal-outer-7"></div>
              <div className="petal petal-outer petal-outer-8"></div>
              {/* Middle layer */}
              <div className="petal petal-middle petal-middle-1"></div>
              <div className="petal petal-middle petal-middle-2"></div>
              <div className="petal petal-middle petal-middle-3"></div>
              <div className="petal petal-middle petal-middle-4"></div>
              <div className="petal petal-middle petal-middle-5"></div>
              <div className="petal petal-middle petal-middle-6"></div>
              <div className="petal petal-middle petal-middle-7"></div>
              <div className="petal petal-middle petal-middle-8"></div>
              {/* Inner layer */}
              <div className="petal petal-inner petal-inner-1"></div>
              <div className="petal petal-inner petal-inner-2"></div>
              <div className="petal petal-inner petal-inner-3"></div>
              <div className="petal petal-inner petal-inner-4"></div>
              <div className="petal petal-inner petal-inner-5"></div>
              <div className="petal petal-inner petal-inner-6"></div>
              <div className="petal petal-inner petal-inner-7"></div>
              <div className="petal petal-inner petal-inner-8"></div>
              <div className="lotus-center"></div>
            </div>
            <div className="water-ripple">
              <div className="ripple ripple-1"></div>
              <div className="ripple ripple-2"></div>
              <div className="ripple ripple-3"></div>
            </div>
          </div>
        </div>
      )}

      {isLoaded && (
        <div className={`lotus-container lotus-transition ${lotusAtTop ? 'lotus-at-top' : ''} ${lotusSpin ? 'lotus-spin' : ''} ${lotusFixed ? 'lotus-fixed' : ''}`}>
          <div className="lotus">
            {/* Outer layer */}
            <div className="petal petal-outer petal-outer-1"></div>
            <div className="petal petal-outer petal-outer-2"></div>
            <div className="petal petal-outer petal-outer-3"></div>
            <div className="petal petal-outer petal-outer-4"></div>
            <div className="petal petal-outer petal-outer-5"></div>
            <div className="petal petal-outer petal-outer-6"></div>
            <div className="petal petal-outer petal-outer-7"></div>
            <div className="petal petal-outer petal-outer-8"></div>
            {/* Middle layer */}
            <div className="petal petal-middle petal-middle-1"></div>
            <div className="petal petal-middle petal-middle-2"></div>
            <div className="petal petal-middle petal-middle-3"></div>
            <div className="petal petal-middle petal-middle-4"></div>
            <div className="petal petal-middle petal-middle-5"></div>
            <div className="petal petal-middle petal-middle-6"></div>
            <div className="petal petal-middle petal-middle-7"></div>
            <div className="petal petal-middle petal-middle-8"></div>
            {/* Inner layer */}
            <div className="petal petal-inner petal-inner-1"></div>
            <div className="petal petal-inner petal-inner-2"></div>
            <div className="petal petal-inner petal-inner-3"></div>
            <div className="petal petal-inner petal-inner-4"></div>
            <div className="petal petal-inner petal-inner-5"></div>
            <div className="petal petal-inner petal-inner-6"></div>
            <div className="petal petal-inner petal-inner-7"></div>
            <div className="petal petal-inner petal-inner-8"></div>
            <div className="lotus-center"></div>
          </div>
          <div className="water-ripple">
            <div className="ripple ripple-1"></div>
            <div className="ripple ripple-2"></div>
            <div className="ripple ripple-3"></div>
          </div>
        </div>
      )}

      <section className="home-section">
        <Hero
          coverFinished={coverFinished}
          onHeroComplete={handleHeroComplete}
          onExpansionStart={() => setLotusSpin(true)}
        />
      </section>

      {coverCompleted && (
        <>
          <section className="home-section">
            <Skills />
          </section>
          <section className="home-section">
            <Timeline />
          </section>
          <section className="home-section">
            <Projects limit={6} />
          </section>
          <section className="home-section">
            <Contacts />
          </section>
          <section className="home-section">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
