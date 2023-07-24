import { CvButton } from "./components/CvButton.tsx";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import information from "./data/about.ts";

function App() {
  return (
    <>
      <div className="bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <CvButton />
          <Hero info={information.hero} />
          <About info={information.about} />
          {false && <Portfolio />}
          <Timeline />
          <Footer info={information.footer} />
        </div>
      </div>
    </>
  );
}

export default App;
