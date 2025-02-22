import { lazy, Suspense, useEffect, useState } from "react";
import AuthService from "./core/services/AuthService";

const loadVertical = (verticalName: string | null) => {
  if (!verticalName) return null;

  console.log("Loading vertical::::", verticalName);
  
  const VerticalApp = lazy(() => import(`./verticals/${verticalName}/App`));

  return VerticalApp;
};

const App = () => {
  const [vertical, setVertical] = useState<string | null>(null);

  useEffect(() => {
    const assignedVertical = AuthService.getCustomerVertical();
    setVertical(assignedVertical);
  }, []);

  if (!vertical) return <p>Loading...</p>;

  const VerticalApp = loadVertical(vertical);

  if (!VerticalApp) return <p>Unauthorized: No vertical assigned</p>;

  return (
    <Suspense fallback={<p>Loading Vertical...</p>}>
      <VerticalApp />
    </Suspense>
  );
};

export default App;
