import { Suspense } from "react";
import Dashboard from "./pages/Dashboard";

const ConstructionApp = () => {
  return (
    <Suspense fallback={<p>Loading Construction Dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
};

export default ConstructionApp;
