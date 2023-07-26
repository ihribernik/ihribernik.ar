import { CvButton } from "./components/CvButton.tsx";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import information from "./data";

function App() {
  return (
    <>
      <div className="bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <CvButton />
          <Hero {...information.hero} />
          <About
            paragraphs={information.about.paragraphs}
            actual_job={information.timeline.jobs[0]}
          />
          <Portfolio enabled={false} />
          <Timeline jobs={information.timeline.jobs} />
          <Footer {...information.footer} />
        </div>
      </div>
    </>
  );
}

export default App;
