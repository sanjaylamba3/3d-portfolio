import Providers from "./components/providers/providers";
import { ThemeToggler } from "./components/theme-toggle";
import Hero from "./sections/hero";

const App = () => {
  return (
    <>
      <Providers>
        {/* <div className="bg-muted p-2">
          <ThemeToggler></ThemeToggler>
        </div> */}
        <Hero></Hero>
      </Providers>
    </>
  );
};

export default App;
