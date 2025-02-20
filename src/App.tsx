import { UIServiceProvider } from "./core/services/UIService";
import Home from "./pages/Home";

const App = () => {
  return (
    <UIServiceProvider>
      <Home />
    </UIServiceProvider>
  );
};

export default App;
