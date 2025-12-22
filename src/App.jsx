import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h1 className="text-5xl text-pink ">
          Welcome To The Project Of GTA & GSAP
        </h1>
      </div>
    </main>
  );
};

export default App;
