import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div>
      <Home />
      <SpeedInsights />
    </div>
  );
}

export default App;
