import loadPlugins from "./plugins/pluginLoader";
// import ConstructionVertical from "../verticals/construction";

const initializeApp = async () => {
  console.log("Initializing application...");

  // ConstructionVertical.register();

  await loadPlugins();

  console.log("All verticals loaded!");
};

export default initializeApp;
