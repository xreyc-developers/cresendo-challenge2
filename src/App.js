import './App.css';
import Header from './components/layout/Header';
import Background1 from './components/ui/background/Background1';
import CardSet1 from './components/cardSet/CardSet1';
import CardSet2 from './components/cardSet/CardSet2';
import Footer from './components/layout/Footer';


function App() {
  return (
    <>
      <Header />
      
      <section className="sec1-bg">
        <div className="sec1-bg-filter">
          <div className="container">
            <div className="sec1-content">
              <div>ACME Wealth</div>
              <div>Management Platforms</div>
              <div>Investment excellence.</div>
              <div>Diversity of thought.</div>
              <div>Organizational strength.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2-bg">
        <div className="container">
          <div className="sec2-content">
            <div>ACME Insights</div>
            <div>How are factors being used around the world</div>
            <CardSet1 />
          </div>
        </div>
      </section>

      <section className="sec3-bg">
        <div className="container">
          <div className="sec3-content">
            <div>Our Commitment to Professionals</div>
            <div>We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and</div>
            <div>experience distribution. We are laser focused on our shared goal - helping clients achieve their objectives.</div>
            <div>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec4-bg">
        <div className="container">
          <div className="sec4-content">
            <div>Upcoming Events</div>
            <div>This needs a great tagline, but I'll fill it in later</div>
            <CardSet2 />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
