import About from "./components/about";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Timeline from "./components/timeline";
import information from "./data";

function App() {
  return (
    <>
      <div className="bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto my-auto">
          <Hero {...information.hero} />
          <About
            paragraphs={information.about.paragraphs}
            actual_job={information.timeline.jobs[0]}
          />
          <Portfolio enabled={false} />
          <Timeline jobs={information.timeline.jobs} />
          <Footer {...information.footer} />
          {/* <CvButton /> */}
        </div>
      </div>
    </>
  );
}

export default App;
