import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { UIServiceProvider } from "./core/services/UIService";
import initializeApp from "./core/initializeApp";
import "./index.css";

// A wrapper component to manage the initialization process
const Root = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const startApp = async () => {
      await initializeApp();
      setIsInitialized(true);
    };

    startApp();
  }, []);

  if (!isInitialized) {
    console.log("Initializing application...");
    return <p>Initializing application...</p>;
  }

  return (
    <StrictMode>
      <UIServiceProvider>
        <App />
      </UIServiceProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Root />);

